package org.apache.jsp.panels.dataSourceManagement;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import org.jboss.dashboard.ui.panel.dataSourceManagement.DataSourceManagementHandler;
import org.jboss.dashboard.LocaleManager;

public final class newDatasourceForm_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List _jspx_dependants;

  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fi18n_005fbundle_0026_005flocale_005fid_005fbaseName_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fmvc_005fformatter_0026_005fname;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005ffactory_005fformUrl_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005ffactory_005fhandler_0026_005fbean_005faction_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005ffactory_005fbean_0026_005fproperty_005fbean_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public Object getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _005fjspx_005ftagPool_005fi18n_005fbundle_0026_005flocale_005fid_005fbaseName_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fmvc_005fformatter_0026_005fname = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005ffactory_005fformUrl_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005ffactory_005fhandler_0026_005fbean_005faction_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005ffactory_005fbean_0026_005fproperty_005fbean_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
  }

  public void _jspDestroy() {
    _005fjspx_005ftagPool_005fi18n_005fbundle_0026_005flocale_005fid_005fbaseName_005fnobody.release();
    _005fjspx_005ftagPool_005fmvc_005fformatter_0026_005fname.release();
    _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.release();
    _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.release();
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.release();
    _005fjspx_005ftagPool_005ffactory_005fformUrl_005fnobody.release();
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.release();
    _005fjspx_005ftagPool_005ffactory_005fhandler_0026_005fbean_005faction_005fnobody.release();
    _005fjspx_005ftagPool_005ffactory_005fbean_0026_005fproperty_005fbean_005fnobody.release();
    _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.release();
    _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.release();
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.release();
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

    java.lang.Object _jspx_type_1 = null;
    java.lang.Object _jspx_display_2 = null;
    java.lang.Object _jspx_value_1 = null;

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
      //  i18n:bundle
      java.util.ResourceBundle bundle = null;
      org.apache.taglibs.i18n.BundleTag _jspx_th_i18n_005fbundle_005f0 = (org.apache.taglibs.i18n.BundleTag) _005fjspx_005ftagPool_005fi18n_005fbundle_0026_005flocale_005fid_005fbaseName_005fnobody.get(org.apache.taglibs.i18n.BundleTag.class);
      _jspx_th_i18n_005fbundle_005f0.setPageContext(_jspx_page_context);
      _jspx_th_i18n_005fbundle_005f0.setParent(null);
      // /panels/dataSourceManagement/newDatasourceForm.jsp(26,0) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_i18n_005fbundle_005f0.setId("bundle");
      // /panels/dataSourceManagement/newDatasourceForm.jsp(26,0) name = baseName type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_i18n_005fbundle_005f0.setBaseName("org.jboss.dashboard.ui.panel.dataSourceManagement.messages");
      // /panels/dataSourceManagement/newDatasourceForm.jsp(26,0) name = locale type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_i18n_005fbundle_005f0.setLocale(LocaleManager.currentLocale());
      int _jspx_eval_i18n_005fbundle_005f0 = _jspx_th_i18n_005fbundle_005f0.doStartTag();
      bundle = (java.util.ResourceBundle) _jspx_page_context.findAttribute("bundle");
      if (_jspx_th_i18n_005fbundle_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
        _005fjspx_005ftagPool_005fi18n_005fbundle_0026_005flocale_005fid_005fbaseName_005fnobody.reuse(_jspx_th_i18n_005fbundle_005f0);
        return;
      }
      bundle = (java.util.ResourceBundle) _jspx_page_context.findAttribute("bundle");
      _005fjspx_005ftagPool_005fi18n_005fbundle_0026_005flocale_005fid_005fbaseName_005fnobody.reuse(_jspx_th_i18n_005fbundle_005f0);
      out.write('\n');
      out.write('\n');
try {
      out.write('\n');
      //  mvc:formatter
      org.jboss.dashboard.ui.taglib.formatter.FormatterTag _jspx_th_mvc_005fformatter_005f0 = (org.jboss.dashboard.ui.taglib.formatter.FormatterTag) _005fjspx_005ftagPool_005fmvc_005fformatter_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FormatterTag.class);
      _jspx_th_mvc_005fformatter_005f0.setPageContext(_jspx_page_context);
      _jspx_th_mvc_005fformatter_005f0.setParent(null);
      // /panels/dataSourceManagement/newDatasourceForm.jsp(29,0) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_mvc_005fformatter_005f0.setName("org.jboss.dashboard.ui.panel.dataSourceManagement.DataSourceManagementFormFormatter");
      int _jspx_eval_mvc_005fformatter_005f0 = _jspx_th_mvc_005fformatter_005f0.doStartTag();
      if (_jspx_eval_mvc_005fformatter_005f0 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
        if (_jspx_eval_mvc_005fformatter_005f0 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
          out = _jspx_page_context.pushBody();
          _jspx_th_mvc_005fformatter_005f0.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
          _jspx_th_mvc_005fformatter_005f0.doInitBody();
        }
        do {
          out.write('\n');
          out.write('\n');
          //  mvc:fragment
          org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f0 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
          _jspx_th_mvc_005ffragment_005f0.setPageContext(_jspx_page_context);
          _jspx_th_mvc_005ffragment_005f0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
          // /panels/dataSourceManagement/newDatasourceForm.jsp(31,0) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
          _jspx_th_mvc_005ffragment_005f0.setName("outputStartEditing");
          int _jspx_eval_mvc_005ffragment_005f0 = _jspx_th_mvc_005ffragment_005f0.doStartTag();
          if (_jspx_eval_mvc_005ffragment_005f0 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
            if (_jspx_eval_mvc_005ffragment_005f0 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
              out = _jspx_page_context.pushBody();
              _jspx_th_mvc_005ffragment_005f0.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
              _jspx_th_mvc_005ffragment_005f0.doInitBody();
            }
            do {
              out.write("\n");
              out.write("    ");
              //  mvc:fragmentValue
              org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f0 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
              _jspx_th_mvc_005ffragmentValue_005f0.setPageContext(_jspx_page_context);
              _jspx_th_mvc_005ffragmentValue_005f0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f0);
              // /panels/dataSourceManagement/newDatasourceForm.jsp(32,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f0.setName("dsName");
              // /panels/dataSourceManagement/newDatasourceForm.jsp(32,4) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f0.setId("dsName");
              int _jspx_eval_mvc_005ffragmentValue_005f0 = _jspx_th_mvc_005ffragmentValue_005f0.doStartTag();
              if (_jspx_eval_mvc_005ffragmentValue_005f0 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                java.lang.Object dsName = null;
                if (_jspx_eval_mvc_005ffragmentValue_005f0 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.pushBody();
                  _jspx_th_mvc_005ffragmentValue_005f0.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                  _jspx_th_mvc_005ffragmentValue_005f0.doInitBody();
                }
                dsName = (java.lang.Object) _jspx_page_context.findAttribute("dsName");
                do {
                  out.write("\n");
                  out.write("            <table align=\"center\" width=\"800px\" cellspacing=\"1\" cellpadding=\"4\" border=\"0\">\n");
                  out.write("                <tr style=\"display:table-row; width:12px;\">\n");
                  out.write("                    <td class=\"skn-table_border\" colspan=\"2\">\n");
                  out.write("                        <div style=\"vertical-align:middle; text-align:left;\"><span style=\"font-weight:bold;\">");
                  if (_jspx_meth_i18n_005fmessage_005f0(_jspx_th_mvc_005ffragmentValue_005f0, _jspx_page_context))
                    return;
                  out.write("</span>&nbsp;");
                  out.print(dsName);
                  out.write("</div>\n");
                  out.write("                    </td>\n");
                  out.write("                </tr>\n");
                  out.write("            </table>\n");
                  out.write("    ");
                  int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f0.doAfterBody();
                  dsName = (java.lang.Object) _jspx_page_context.findAttribute("dsName");
                  if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                    break;
                } while (true);
                if (_jspx_eval_mvc_005ffragmentValue_005f0 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.popBody();
                }
              }
              if (_jspx_th_mvc_005ffragmentValue_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f0);
                return;
              }
              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f0);
              out.write('\n');
              int evalDoAfterBody = _jspx_th_mvc_005ffragment_005f0.doAfterBody();
              if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                break;
            } while (true);
            if (_jspx_eval_mvc_005ffragment_005f0 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
              out = _jspx_page_context.popBody();
            }
          }
          if (_jspx_th_mvc_005ffragment_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
            _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f0);
            return;
          }
          _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f0);
          out.write('\n');
          out.write('\n');
          if (_jspx_meth_mvc_005ffragment_005f1(_jspx_th_mvc_005fformatter_005f0, _jspx_page_context))
            return;
          out.write('\n');
          out.write('\n');
          //  mvc:fragment
          org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f2 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
          _jspx_th_mvc_005ffragment_005f2.setPageContext(_jspx_page_context);
          _jspx_th_mvc_005ffragment_005f2.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
          // /panels/dataSourceManagement/newDatasourceForm.jsp(49,0) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
          _jspx_th_mvc_005ffragment_005f2.setName("outputRadios");
          int _jspx_eval_mvc_005ffragment_005f2 = _jspx_th_mvc_005ffragment_005f2.doStartTag();
          if (_jspx_eval_mvc_005ffragment_005f2 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
            if (_jspx_eval_mvc_005ffragment_005f2 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
              out = _jspx_page_context.pushBody();
              _jspx_th_mvc_005ffragment_005f2.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
              _jspx_th_mvc_005ffragment_005f2.doInitBody();
            }
            do {
              out.write("\n");
              out.write("    ");
              //  mvc:fragmentValue
              org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f1 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
              _jspx_th_mvc_005ffragmentValue_005f1.setPageContext(_jspx_page_context);
              _jspx_th_mvc_005ffragmentValue_005f1.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f2);
              // /panels/dataSourceManagement/newDatasourceForm.jsp(50,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f1.setName("error");
              // /panels/dataSourceManagement/newDatasourceForm.jsp(50,4) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f1.setId("error");
              int _jspx_eval_mvc_005ffragmentValue_005f1 = _jspx_th_mvc_005ffragmentValue_005f1.doStartTag();
              if (_jspx_eval_mvc_005ffragmentValue_005f1 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                java.lang.Object error = null;
                if (_jspx_eval_mvc_005ffragmentValue_005f1 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.pushBody();
                  _jspx_th_mvc_005ffragmentValue_005f1.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                  _jspx_th_mvc_005ffragmentValue_005f1.doInitBody();
                }
                error = (java.lang.Object) _jspx_page_context.findAttribute("error");
                do {
                  out.write("\n");
                  out.write("    ");
                  //  mvc:fragmentValue
                  org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f2 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                  _jspx_th_mvc_005ffragmentValue_005f2.setPageContext(_jspx_page_context);
                  _jspx_th_mvc_005ffragmentValue_005f2.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f1);
                  // /panels/dataSourceManagement/newDatasourceForm.jsp(51,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                  _jspx_th_mvc_005ffragmentValue_005f2.setName("type");
                  // /panels/dataSourceManagement/newDatasourceForm.jsp(51,4) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                  _jspx_th_mvc_005ffragmentValue_005f2.setId("type");
                  int _jspx_eval_mvc_005ffragmentValue_005f2 = _jspx_th_mvc_005ffragmentValue_005f2.doStartTag();
                  if (_jspx_eval_mvc_005ffragmentValue_005f2 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                    java.lang.Object type = null;
                    if (_jspx_eval_mvc_005ffragmentValue_005f2 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                      out = _jspx_page_context.pushBody();
                      _jspx_th_mvc_005ffragmentValue_005f2.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                      _jspx_th_mvc_005ffragmentValue_005f2.doInitBody();
                    }
                    type = (java.lang.Object) _jspx_page_context.findAttribute("type");
                    do {
                      out.write("\n");
                      out.write("        ");
                      //  mvc:fragmentValue
                      org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f3 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                      _jspx_th_mvc_005ffragmentValue_005f3.setPageContext(_jspx_page_context);
                      _jspx_th_mvc_005ffragmentValue_005f3.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f2);
                      // /panels/dataSourceManagement/newDatasourceForm.jsp(52,8) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                      _jspx_th_mvc_005ffragmentValue_005f3.setName("display");
                      // /panels/dataSourceManagement/newDatasourceForm.jsp(52,8) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                      _jspx_th_mvc_005ffragmentValue_005f3.setId("display");
                      int _jspx_eval_mvc_005ffragmentValue_005f3 = _jspx_th_mvc_005ffragmentValue_005f3.doStartTag();
                      if (_jspx_eval_mvc_005ffragmentValue_005f3 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                        java.lang.Object display = null;
                        if (_jspx_eval_mvc_005ffragmentValue_005f3 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                          out = _jspx_page_context.pushBody();
                          _jspx_th_mvc_005ffragmentValue_005f3.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                          _jspx_th_mvc_005ffragmentValue_005f3.doInitBody();
                        }
                        display = (java.lang.Object) _jspx_page_context.findAttribute("display");
                        do {
                          out.write("\n");
                          out.write("                <tr>\n");
                          out.write("                     <td class=\"skn-even_row\" width=\"150px\">\n");
                          out.write("                        <span class=\"");
                          out.print(((Boolean)error).booleanValue() ?"skn-error":"");
                          out.write("\">\n");
                          out.write("                            ");
                          if (_jspx_meth_i18n_005fmessage_005f1(_jspx_th_mvc_005ffragmentValue_005f3, _jspx_page_context))
                            return;
                          out.write("\n");
                          out.write("                        </span>\n");
                          out.write("                    </td>\n");
                          out.write("                    <td  nowrap=\"nowrap\" align=\"left\">\n");
                          out.write("                        <input type=\"radio\"\n");
                          out.write("                               onclick=\"if(this.checked){\n");
                          out.write("                                            document.getElementById('");
                          if (_jspx_meth_panel_005fencode_005f2(_jspx_th_mvc_005ffragmentValue_005f3, _jspx_page_context))
                            return;
                          out.write("').style.display = '';\n");
                          out.write("                                            document.getElementById('");
                          if (_jspx_meth_panel_005fencode_005f3(_jspx_th_mvc_005ffragmentValue_005f3, _jspx_page_context))
                            return;
                          out.write("').style.display = '';\n");
                          out.write("                                            document.getElementById('");
                          if (_jspx_meth_panel_005fencode_005f4(_jspx_th_mvc_005ffragmentValue_005f3, _jspx_page_context))
                            return;
                          out.write("').style.display = '';\n");
                          out.write("                                            document.getElementById('");
                          if (_jspx_meth_panel_005fencode_005f5(_jspx_th_mvc_005ffragmentValue_005f3, _jspx_page_context))
                            return;
                          out.write("').value = '';\n");
                          out.write("                                            document.getElementById('");
                          if (_jspx_meth_panel_005fencode_005f6(_jspx_th_mvc_005ffragmentValue_005f3, _jspx_page_context))
                            return;
                          out.write("').style.display = 'none';\n");
                          out.write("                                            document.getElementById('");
                          if (_jspx_meth_panel_005fencode_005f7(_jspx_th_mvc_005ffragmentValue_005f3, _jspx_page_context))
                            return;
                          out.write("').style.display = 'none';\n");
                          out.write("                                            document.getElementById('");
                          if (_jspx_meth_panel_005fencode_005f8(_jspx_th_mvc_005ffragmentValue_005f3, _jspx_page_context))
                            return;
                          out.write("').style.display = 'none';\n");
                          out.write("                                            document.getElementById('");
                          if (_jspx_meth_panel_005fencode_005f9(_jspx_th_mvc_005ffragmentValue_005f3, _jspx_page_context))
                            return;
                          out.write("').style.display = 'none';\n");
                          out.write("                                        }\"\n");
                          out.write("                               name=\"");
                          if (_jspx_meth_factory_005fbean_005f0(_jspx_th_mvc_005ffragmentValue_005f3, _jspx_page_context))
                            return;
                          out.write("\"\n");
                          out.write("                               value=\"");
                          out.print(DataSourceManagementHandler.JNDI_TYPE);
                          out.write("\"\n");
                          out.write("                               ");
                          out.print( (type!=null && DataSourceManagementHandler.JNDI_TYPE.equals(type)) ? "checked" : "");
                          out.write(">\n");
                          out.write("                        ");
                          if (_jspx_meth_i18n_005fmessage_005f2(_jspx_th_mvc_005ffragmentValue_005f3, _jspx_page_context))
                            return;
                          out.write("\n");
                          out.write("                        &nbsp;\n");
                          out.write("                        <input type=\"radio\" onclick=\"if(this.checked){\n");
                          out.write("                                                         document.getElementById('");
                          if (_jspx_meth_panel_005fencode_005f10(_jspx_th_mvc_005ffragmentValue_005f3, _jspx_page_context))
                            return;
                          out.write("').style.display = '';\n");
                          out.write("                                                         document.getElementById('");
                          if (_jspx_meth_panel_005fencode_005f11(_jspx_th_mvc_005ffragmentValue_005f3, _jspx_page_context))
                            return;
                          out.write("').style.display = '';\n");
                          out.write("                                                         document.getElementById('");
                          if (_jspx_meth_panel_005fencode_005f12(_jspx_th_mvc_005ffragmentValue_005f3, _jspx_page_context))
                            return;
                          out.write("').style.display = '';\n");
                          out.write("                                                         document.getElementById('");
                          if (_jspx_meth_panel_005fencode_005f13(_jspx_th_mvc_005ffragmentValue_005f3, _jspx_page_context))
                            return;
                          out.write("').style.display = '';\n");
                          out.write("                                                         document.getElementById('");
                          if (_jspx_meth_panel_005fencode_005f14(_jspx_th_mvc_005ffragmentValue_005f3, _jspx_page_context))
                            return;
                          out.write("').style.display = '';\n");
                          out.write("                                                         document.getElementById('");
                          if (_jspx_meth_panel_005fencode_005f15(_jspx_th_mvc_005ffragmentValue_005f3, _jspx_page_context))
                            return;
                          out.write("').style.display = '';\n");
                          out.write("                                                         document.getElementById('");
                          if (_jspx_meth_panel_005fencode_005f16(_jspx_th_mvc_005ffragmentValue_005f3, _jspx_page_context))
                            return;
                          out.write("').value = testQuerys[0];\n");
                          out.write("                                                         document.getElementById('");
                          if (_jspx_meth_panel_005fencode_005f17(_jspx_th_mvc_005ffragmentValue_005f3, _jspx_page_context))
                            return;
                          out.write("').style.display = 'none';\n");
                          out.write("                                                     }\"\n");
                          out.write("                               name=\"");
                          if (_jspx_meth_factory_005fbean_005f1(_jspx_th_mvc_005ffragmentValue_005f3, _jspx_page_context))
                            return;
                          out.write("\"\n");
                          out.write("                               value=\"");
                          out.print(DataSourceManagementHandler.CUSTOM_TYPE);
                          out.write("\"\n");
                          out.write("                               ");
                          out.print( (type!=null && DataSourceManagementHandler.CUSTOM_TYPE.equals(type)) ? "checked" : "");
                          out.write(">\n");
                          out.write("                        ");
                          if (_jspx_meth_i18n_005fmessage_005f3(_jspx_th_mvc_005ffragmentValue_005f3, _jspx_page_context))
                            return;
                          out.write("\n");
                          out.write("                    </td>\n");
                          out.write("              </tr>\n");
                          out.write("    ");
                          int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f3.doAfterBody();
                          display = (java.lang.Object) _jspx_page_context.findAttribute("display");
                          if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                            break;
                        } while (true);
                        if (_jspx_eval_mvc_005ffragmentValue_005f3 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                          out = _jspx_page_context.popBody();
                        }
                      }
                      if (_jspx_th_mvc_005ffragmentValue_005f3.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                        _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f3);
                        return;
                      }
                      _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f3);
                      out.write("\n");
                      out.write("        ");
                      int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f2.doAfterBody();
                      type = (java.lang.Object) _jspx_page_context.findAttribute("type");
                      if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                        break;
                    } while (true);
                    if (_jspx_eval_mvc_005ffragmentValue_005f2 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                      out = _jspx_page_context.popBody();
                    }
                  }
                  if (_jspx_th_mvc_005ffragmentValue_005f2.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                    _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f2);
                    return;
                  }
                  _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f2);
                  out.write("\n");
                  out.write("    ");
                  int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f1.doAfterBody();
                  error = (java.lang.Object) _jspx_page_context.findAttribute("error");
                  if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                    break;
                } while (true);
                if (_jspx_eval_mvc_005ffragmentValue_005f1 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.popBody();
                }
              }
              if (_jspx_th_mvc_005ffragmentValue_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f1);
                return;
              }
              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f1);
              out.write('\n');
              int evalDoAfterBody = _jspx_th_mvc_005ffragment_005f2.doAfterBody();
              if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                break;
            } while (true);
            if (_jspx_eval_mvc_005ffragment_005f2 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
              out = _jspx_page_context.popBody();
            }
          }
          if (_jspx_th_mvc_005ffragment_005f2.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
            _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f2);
            return;
          }
          _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f2);
          out.write('\n');
          out.write('\n');
          out.write('\n');
          //  mvc:fragment
          org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f3 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
          _jspx_th_mvc_005ffragment_005f3.setPageContext(_jspx_page_context);
          _jspx_th_mvc_005ffragment_005f3.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
          // /panels/dataSourceManagement/newDatasourceForm.jsp(98,0) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
          _jspx_th_mvc_005ffragment_005f3.setName("outputName");
          int _jspx_eval_mvc_005ffragment_005f3 = _jspx_th_mvc_005ffragment_005f3.doStartTag();
          if (_jspx_eval_mvc_005ffragment_005f3 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
            if (_jspx_eval_mvc_005ffragment_005f3 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
              out = _jspx_page_context.pushBody();
              _jspx_th_mvc_005ffragment_005f3.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
              _jspx_th_mvc_005ffragment_005f3.doInitBody();
            }
            do {
              out.write("\n");
              out.write("    ");
              //  mvc:fragmentValue
              org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f4 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
              _jspx_th_mvc_005ffragmentValue_005f4.setPageContext(_jspx_page_context);
              _jspx_th_mvc_005ffragmentValue_005f4.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f3);
              // /panels/dataSourceManagement/newDatasourceForm.jsp(99,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f4.setName("errorName");
              // /panels/dataSourceManagement/newDatasourceForm.jsp(99,4) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f4.setId("errorName");
              int _jspx_eval_mvc_005ffragmentValue_005f4 = _jspx_th_mvc_005ffragmentValue_005f4.doStartTag();
              if (_jspx_eval_mvc_005ffragmentValue_005f4 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                java.lang.Object errorName = null;
                if (_jspx_eval_mvc_005ffragmentValue_005f4 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.pushBody();
                  _jspx_th_mvc_005ffragmentValue_005f4.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                  _jspx_th_mvc_005ffragmentValue_005f4.doInitBody();
                }
                errorName = (java.lang.Object) _jspx_page_context.findAttribute("errorName");
                do {
                  out.write("\n");
                  out.write("                <tr id=\"");
                  if (_jspx_meth_panel_005fencode_005f18(_jspx_th_mvc_005ffragmentValue_005f4, _jspx_page_context))
                    return;
                  out.write("\" style=\"display:none;\">\n");
                  out.write("                    <td width=\"150px\" align=\"right\" class=\"skn-even_row\">\n");
                  out.write("                        <span class=\"");
                  out.print(((Boolean)errorName).booleanValue()?"skn-error":"");
                  out.write("\">\n");
                  out.write("                            ");
                  if (_jspx_meth_i18n_005fmessage_005f4(_jspx_th_mvc_005ffragmentValue_005f4, _jspx_page_context))
                    return;
                  out.write("\n");
                  out.write("                        </span>\n");
                  out.write("                    </td>\n");
                  out.write("                    <td align=\"left\">\n");
                  out.write("                        <input class=\"skn-input\"\n");
                  out.write("                               name=\"");
                  if (_jspx_meth_factory_005fbean_005f2(_jspx_th_mvc_005ffragmentValue_005f4, _jspx_page_context))
                    return;
                  out.write("\"\n");
                  out.write("                               value=\"");
                  //  mvc:fragmentValue
                  org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f5 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                  _jspx_th_mvc_005ffragmentValue_005f5.setPageContext(_jspx_page_context);
                  _jspx_th_mvc_005ffragmentValue_005f5.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f4);
                  // /panels/dataSourceManagement/newDatasourceForm.jsp(109,38) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                  _jspx_th_mvc_005ffragmentValue_005f5.setName("Name");
                  int _jspx_eval_mvc_005ffragmentValue_005f5 = _jspx_th_mvc_005ffragmentValue_005f5.doStartTag();
                  if (_jspx_th_mvc_005ffragmentValue_005f5.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                    _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f5);
                    return;
                  }
                  _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f5);
                  out.write("\">\n");
                  out.write("                    </td>\n");
                  out.write("                </tr>\n");
                  out.write("    ");
                  int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f4.doAfterBody();
                  errorName = (java.lang.Object) _jspx_page_context.findAttribute("errorName");
                  if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                    break;
                } while (true);
                if (_jspx_eval_mvc_005ffragmentValue_005f4 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.popBody();
                }
              }
              if (_jspx_th_mvc_005ffragmentValue_005f4.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f4);
                return;
              }
              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f4);
              out.write('\n');
              int evalDoAfterBody = _jspx_th_mvc_005ffragment_005f3.doAfterBody();
              if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                break;
            } while (true);
            if (_jspx_eval_mvc_005ffragment_005f3 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
              out = _jspx_page_context.popBody();
            }
          }
          if (_jspx_th_mvc_005ffragment_005f3.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
            _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f3);
            return;
          }
          _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f3);
          out.write('\n');
          out.write('\n');
          //  mvc:fragment
          org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f4 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
          _jspx_th_mvc_005ffragment_005f4.setPageContext(_jspx_page_context);
          _jspx_th_mvc_005ffragment_005f4.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
          // /panels/dataSourceManagement/newDatasourceForm.jsp(115,0) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
          _jspx_th_mvc_005ffragment_005f4.setName("outputJNDI");
          int _jspx_eval_mvc_005ffragment_005f4 = _jspx_th_mvc_005ffragment_005f4.doStartTag();
          if (_jspx_eval_mvc_005ffragment_005f4 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
            if (_jspx_eval_mvc_005ffragment_005f4 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
              out = _jspx_page_context.pushBody();
              _jspx_th_mvc_005ffragment_005f4.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
              _jspx_th_mvc_005ffragment_005f4.doInitBody();
            }
            do {
              out.write("\n");
              out.write("    ");
              //  mvc:fragmentValue
              org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f6 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
              _jspx_th_mvc_005ffragmentValue_005f6.setPageContext(_jspx_page_context);
              _jspx_th_mvc_005ffragmentValue_005f6.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f4);
              // /panels/dataSourceManagement/newDatasourceForm.jsp(116,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f6.setName("errorJndiPath");
              // /panels/dataSourceManagement/newDatasourceForm.jsp(116,4) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f6.setId("errorJndiPath");
              int _jspx_eval_mvc_005ffragmentValue_005f6 = _jspx_th_mvc_005ffragmentValue_005f6.doStartTag();
              if (_jspx_eval_mvc_005ffragmentValue_005f6 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                java.lang.Object errorJndiPath = null;
                if (_jspx_eval_mvc_005ffragmentValue_005f6 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.pushBody();
                  _jspx_th_mvc_005ffragmentValue_005f6.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                  _jspx_th_mvc_005ffragmentValue_005f6.doInitBody();
                }
                errorJndiPath = (java.lang.Object) _jspx_page_context.findAttribute("errorJndiPath");
                do {
                  out.write("\n");
                  out.write("                <tr id=\"");
                  if (_jspx_meth_panel_005fencode_005f19(_jspx_th_mvc_005ffragmentValue_005f6, _jspx_page_context))
                    return;
                  out.write("\" style=\"display:none\">\n");
                  out.write("                    <td width=\"150px\" align=\"right\" class=\"skn-even_row\">\n");
                  out.write("                        <span class=\"");
                  out.print(((Boolean)errorJndiPath).booleanValue()?"skn-error":"");
                  out.write("\">\n");
                  out.write("                            ");
                  if (_jspx_meth_i18n_005fmessage_005f5(_jspx_th_mvc_005ffragmentValue_005f6, _jspx_page_context))
                    return;
                  out.write("\n");
                  out.write("                        </span>\n");
                  out.write("                    </td>\n");
                  out.write("                    <td align=\"left\">\n");
                  out.write("                        <input class=\"skn-input\"\n");
                  out.write("                               name=\"");
                  if (_jspx_meth_factory_005fbean_005f3(_jspx_th_mvc_005ffragmentValue_005f6, _jspx_page_context))
                    return;
                  out.write("\"\n");
                  out.write("                               value=\"");
                  //  mvc:fragmentValue
                  org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f7 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                  _jspx_th_mvc_005ffragmentValue_005f7.setPageContext(_jspx_page_context);
                  _jspx_th_mvc_005ffragmentValue_005f7.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f6);
                  // /panels/dataSourceManagement/newDatasourceForm.jsp(126,38) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                  _jspx_th_mvc_005ffragmentValue_005f7.setName("JndiPath");
                  int _jspx_eval_mvc_005ffragmentValue_005f7 = _jspx_th_mvc_005ffragmentValue_005f7.doStartTag();
                  if (_jspx_th_mvc_005ffragmentValue_005f7.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                    _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f7);
                    return;
                  }
                  _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f7);
                  out.write("\"\n");
                  out.write("                               size=\"52\">\n");
                  out.write("                    </td>\n");
                  out.write("                </tr>\n");
                  out.write("    ");
                  int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f6.doAfterBody();
                  errorJndiPath = (java.lang.Object) _jspx_page_context.findAttribute("errorJndiPath");
                  if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                    break;
                } while (true);
                if (_jspx_eval_mvc_005ffragmentValue_005f6 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.popBody();
                }
              }
              if (_jspx_th_mvc_005ffragmentValue_005f6.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f6);
                return;
              }
              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f6);
              out.write('\n');
              int evalDoAfterBody = _jspx_th_mvc_005ffragment_005f4.doAfterBody();
              if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                break;
            } while (true);
            if (_jspx_eval_mvc_005ffragment_005f4 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
              out = _jspx_page_context.popBody();
            }
          }
          if (_jspx_th_mvc_005ffragment_005f4.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
            _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f4);
            return;
          }
          _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f4);
          out.write('\n');
          out.write('\n');
          out.write('\n');
          //  mvc:fragment
          org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f5 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
          _jspx_th_mvc_005ffragment_005f5.setPageContext(_jspx_page_context);
          _jspx_th_mvc_005ffragment_005f5.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
          // /panels/dataSourceManagement/newDatasourceForm.jsp(134,0) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
          _jspx_th_mvc_005ffragment_005f5.setName("outputLocal");
          int _jspx_eval_mvc_005ffragment_005f5 = _jspx_th_mvc_005ffragment_005f5.doStartTag();
          if (_jspx_eval_mvc_005ffragment_005f5 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
            if (_jspx_eval_mvc_005ffragment_005f5 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
              out = _jspx_page_context.pushBody();
              _jspx_th_mvc_005ffragment_005f5.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
              _jspx_th_mvc_005ffragment_005f5.doInitBody();
            }
            do {
              out.write("\n");
              out.write("    ");
              //  mvc:fragmentValue
              org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f8 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
              _jspx_th_mvc_005ffragmentValue_005f8.setPageContext(_jspx_page_context);
              _jspx_th_mvc_005ffragmentValue_005f8.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f5);
              // /panels/dataSourceManagement/newDatasourceForm.jsp(135,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f8.setName("errorUrl");
              // /panels/dataSourceManagement/newDatasourceForm.jsp(135,4) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f8.setId("errorUrl");
              int _jspx_eval_mvc_005ffragmentValue_005f8 = _jspx_th_mvc_005ffragmentValue_005f8.doStartTag();
              if (_jspx_eval_mvc_005ffragmentValue_005f8 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                java.lang.Object errorUrl = null;
                if (_jspx_eval_mvc_005ffragmentValue_005f8 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.pushBody();
                  _jspx_th_mvc_005ffragmentValue_005f8.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                  _jspx_th_mvc_005ffragmentValue_005f8.doInitBody();
                }
                errorUrl = (java.lang.Object) _jspx_page_context.findAttribute("errorUrl");
                do {
                  out.write("\n");
                  out.write("                <tr id=\"");
                  if (_jspx_meth_panel_005fencode_005f20(_jspx_th_mvc_005ffragmentValue_005f8, _jspx_page_context))
                    return;
                  out.write("\" style=\"display:none\">\n");
                  out.write("                    <td width=\"150px\" align=\"right\" class=\"skn-even_row\">\n");
                  out.write("                        <span class=\"");
                  out.print(((Boolean)errorUrl).booleanValue()?"skn-error":"");
                  out.write("\">\n");
                  out.write("                            ");
                  if (_jspx_meth_i18n_005fmessage_005f6(_jspx_th_mvc_005ffragmentValue_005f8, _jspx_page_context))
                    return;
                  out.write("\n");
                  out.write("                        </span>\n");
                  out.write("                    </td>\n");
                  out.write("                    <td align=\"left\">\n");
                  out.write("                        <input class=\"skn-input\" size=\"52\"\n");
                  out.write("                               name=\"");
                  if (_jspx_meth_factory_005fbean_005f4(_jspx_th_mvc_005ffragmentValue_005f8, _jspx_page_context))
                    return;
                  out.write("\"\n");
                  out.write("                               value=\"");
                  //  mvc:fragmentValue
                  org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f9 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                  _jspx_th_mvc_005ffragmentValue_005f9.setPageContext(_jspx_page_context);
                  _jspx_th_mvc_005ffragmentValue_005f9.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f8);
                  // /panels/dataSourceManagement/newDatasourceForm.jsp(145,38) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                  _jspx_th_mvc_005ffragmentValue_005f9.setName("Url");
                  int _jspx_eval_mvc_005ffragmentValue_005f9 = _jspx_th_mvc_005ffragmentValue_005f9.doStartTag();
                  if (_jspx_th_mvc_005ffragmentValue_005f9.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                    _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f9);
                    return;
                  }
                  _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f9);
                  out.write("\">\n");
                  out.write("                    </td>\n");
                  out.write("                </tr>\n");
                  out.write("    ");
                  int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f8.doAfterBody();
                  errorUrl = (java.lang.Object) _jspx_page_context.findAttribute("errorUrl");
                  if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                    break;
                } while (true);
                if (_jspx_eval_mvc_005ffragmentValue_005f8 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.popBody();
                }
              }
              if (_jspx_th_mvc_005ffragmentValue_005f8.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f8);
                return;
              }
              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f8);
              out.write("\n");
              out.write("\n");
              out.write("\t\t");
              //  mvc:fragmentValue
              org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f10 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
              _jspx_th_mvc_005ffragmentValue_005f10.setPageContext(_jspx_page_context);
              _jspx_th_mvc_005ffragmentValue_005f10.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f5);
              // /panels/dataSourceManagement/newDatasourceForm.jsp(150,2) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f10.setName("errorDriverClass");
              // /panels/dataSourceManagement/newDatasourceForm.jsp(150,2) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f10.setId("errorDriverClass");
              int _jspx_eval_mvc_005ffragmentValue_005f10 = _jspx_th_mvc_005ffragmentValue_005f10.doStartTag();
              if (_jspx_eval_mvc_005ffragmentValue_005f10 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                java.lang.Object errorDriverClass = null;
                if (_jspx_eval_mvc_005ffragmentValue_005f10 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.pushBody();
                  _jspx_th_mvc_005ffragmentValue_005f10.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                  _jspx_th_mvc_005ffragmentValue_005f10.doInitBody();
                }
                errorDriverClass = (java.lang.Object) _jspx_page_context.findAttribute("errorDriverClass");
                do {
                  out.write("\n");
                  out.write("                <tr id=\"");
                  if (_jspx_meth_panel_005fencode_005f21(_jspx_th_mvc_005ffragmentValue_005f10, _jspx_page_context))
                    return;
                  out.write("\" style=\"display:none\">\n");
                  out.write("                    <td width=\"150px\" align=\"right\" class=\"skn-even_row\">\n");
                  out.write("                        <span class=\"");
                  out.print(((Boolean)errorDriverClass).booleanValue()?"skn-error":"");
                  out.write("\">\n");
                  out.write("                            ");
                  if (_jspx_meth_i18n_005fmessage_005f7(_jspx_th_mvc_005ffragmentValue_005f10, _jspx_page_context))
                    return;
                  out.write("\n");
                  out.write("                        </span>\n");
                  out.write("                    </td>\n");
                  out.write("\t\t\t\t\t\t\t\t\t\t<td>\n");
                  out.write("\t\t\t\t\t\t\t\t\t\t\t<table>\n");
                  out.write("\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n");
                  out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<td  align=\"left\">\n");
                  out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"skn-input\"\n");
                  out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"db\" onchange=\"changeTestQuery(this, '");
                  if (_jspx_meth_panel_005fencode_005f22(_jspx_th_mvc_005ffragmentValue_005f10, _jspx_page_context))
                    return;
                  out.write("'); changeDriverClass(this, '");
                  if (_jspx_meth_panel_005fencode_005f23(_jspx_th_mvc_005ffragmentValue_005f10, _jspx_page_context))
                    return;
                  out.write("');\">\n");
                  out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" ");
                  //  mvc:fragmentValue
                  org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f11 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                  _jspx_th_mvc_005ffragmentValue_005f11.setPageContext(_jspx_page_context);
                  _jspx_th_mvc_005ffragmentValue_005f11.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f10);
                  // /panels/dataSourceManagement/newDatasourceForm.jsp(163,31) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                  _jspx_th_mvc_005ffragmentValue_005f11.setName("selectedNone");
                  int _jspx_eval_mvc_005ffragmentValue_005f11 = _jspx_th_mvc_005ffragmentValue_005f11.doStartTag();
                  if (_jspx_th_mvc_005ffragmentValue_005f11.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                    _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f11);
                    return;
                  }
                  _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f11);
                  out.write("></option>\n");
                  out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"com.mysql.jdbc.Driver\" ");
                  //  mvc:fragmentValue
                  org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f12 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                  _jspx_th_mvc_005ffragmentValue_005f12.setPageContext(_jspx_page_context);
                  _jspx_th_mvc_005ffragmentValue_005f12.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f10);
                  // /panels/dataSourceManagement/newDatasourceForm.jsp(164,52) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                  _jspx_th_mvc_005ffragmentValue_005f12.setName("selectedMySQL");
                  int _jspx_eval_mvc_005ffragmentValue_005f12 = _jspx_th_mvc_005ffragmentValue_005f12.doStartTag();
                  if (_jspx_th_mvc_005ffragmentValue_005f12.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                    _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f12);
                    return;
                  }
                  _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f12);
                  out.write(">\n");
                  out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMySQL</option>\n");
                  out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"org.postgresql.Driver\"\n");
                  out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t");
                  //  mvc:fragmentValue
                  org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f13 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                  _jspx_th_mvc_005ffragmentValue_005f13.setPageContext(_jspx_page_context);
                  _jspx_th_mvc_005ffragmentValue_005f13.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f10);
                  // /panels/dataSourceManagement/newDatasourceForm.jsp(167,15) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                  _jspx_th_mvc_005ffragmentValue_005f13.setName("selectedPostgres");
                  int _jspx_eval_mvc_005ffragmentValue_005f13 = _jspx_th_mvc_005ffragmentValue_005f13.doStartTag();
                  if (_jspx_th_mvc_005ffragmentValue_005f13.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                    _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f13);
                    return;
                  }
                  _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f13);
                  out.write(">PostgreSQL</option>\n");
                  out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"oracle.jdbc.driver.OracleDriver\"\n");
                  out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t");
                  //  mvc:fragmentValue
                  org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f14 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                  _jspx_th_mvc_005ffragmentValue_005f14.setPageContext(_jspx_page_context);
                  _jspx_th_mvc_005ffragmentValue_005f14.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f10);
                  // /panels/dataSourceManagement/newDatasourceForm.jsp(169,15) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                  _jspx_th_mvc_005ffragmentValue_005f14.setName("selectedOracle");
                  int _jspx_eval_mvc_005ffragmentValue_005f14 = _jspx_th_mvc_005ffragmentValue_005f14.doStartTag();
                  if (_jspx_th_mvc_005ffragmentValue_005f14.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                    _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f14);
                    return;
                  }
                  _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f14);
                  out.write(">Oracle</option>\n");
                  out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"com.microsoft.sqlserver.jdbc.SQLServerDriver\"\n");
                  out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t");
                  //  mvc:fragmentValue
                  org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f15 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                  _jspx_th_mvc_005ffragmentValue_005f15.setPageContext(_jspx_page_context);
                  _jspx_th_mvc_005ffragmentValue_005f15.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f10);
                  // /panels/dataSourceManagement/newDatasourceForm.jsp(171,15) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                  _jspx_th_mvc_005ffragmentValue_005f15.setName("selectedSQLServer");
                  int _jspx_eval_mvc_005ffragmentValue_005f15 = _jspx_th_mvc_005ffragmentValue_005f15.doStartTag();
                  if (_jspx_th_mvc_005ffragmentValue_005f15.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                    _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f15);
                    return;
                  }
                  _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f15);
                  out.write(">SQLServer</option>\n");
                  out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"org.h2.Driver\"\n");
                  out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t");
                  //  mvc:fragmentValue
                  org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f16 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                  _jspx_th_mvc_005ffragmentValue_005f16.setPageContext(_jspx_page_context);
                  _jspx_th_mvc_005ffragmentValue_005f16.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f10);
                  // /panels/dataSourceManagement/newDatasourceForm.jsp(173,15) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                  _jspx_th_mvc_005ffragmentValue_005f16.setName("selectedH2");
                  int _jspx_eval_mvc_005ffragmentValue_005f16 = _jspx_th_mvc_005ffragmentValue_005f16.doStartTag();
                  if (_jspx_th_mvc_005ffragmentValue_005f16.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                    _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f16);
                    return;
                  }
                  _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f16);
                  out.write(">H2</option>\n");
                  out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"org.teiid.jdbc.TeiidDriver\"\n");
                  out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t");
                  //  mvc:fragmentValue
                  org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f17 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                  _jspx_th_mvc_005ffragmentValue_005f17.setPageContext(_jspx_page_context);
                  _jspx_th_mvc_005ffragmentValue_005f17.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f10);
                  // /panels/dataSourceManagement/newDatasourceForm.jsp(175,15) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                  _jspx_th_mvc_005ffragmentValue_005f17.setName("selectedTeiid");
                  int _jspx_eval_mvc_005ffragmentValue_005f17 = _jspx_th_mvc_005ffragmentValue_005f17.doStartTag();
                  if (_jspx_th_mvc_005ffragmentValue_005f17.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                    _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f17);
                    return;
                  }
                  _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f17);
                  out.write(">Teiid</option>                                                            \n");
                  out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n");
                  out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t</td>&nbsp;&nbsp;\n");
                  out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<td align=\"left\">\n");
                  out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t&nbsp;&nbsp;");
                  if (_jspx_meth_i18n_005fmessage_005f8(_jspx_th_mvc_005ffragmentValue_005f10, _jspx_page_context))
                    return;
                  out.write("\n");
                  out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"skn-input\" id=\"");
                  if (_jspx_meth_panel_005fencode_005f24(_jspx_th_mvc_005ffragmentValue_005f10, _jspx_page_context))
                    return;
                  out.write("\"\n");
                  out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t name=\"");
                  if (_jspx_meth_factory_005fbean_005f5(_jspx_th_mvc_005ffragmentValue_005f10, _jspx_page_context))
                    return;
                  out.write("\"\n");
                  out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t value=\"");
                  //  mvc:fragmentValue
                  org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f18 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                  _jspx_th_mvc_005ffragmentValue_005f18.setPageContext(_jspx_page_context);
                  _jspx_th_mvc_005ffragmentValue_005f18.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f10);
                  // /panels/dataSourceManagement/newDatasourceForm.jsp(182,25) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                  _jspx_th_mvc_005ffragmentValue_005f18.setName("DriverClassName");
                  int _jspx_eval_mvc_005ffragmentValue_005f18 = _jspx_th_mvc_005ffragmentValue_005f18.doStartTag();
                  if (_jspx_th_mvc_005ffragmentValue_005f18.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                    _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f18);
                    return;
                  }
                  _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f18);
                  out.write("\">\n");
                  out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n");
                  out.write("\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n");
                  out.write("\t\t\t\t\t\t\t\t\t\t\t</table>\n");
                  out.write("\t\t\t\t\t\t\t\t\t\t</td>\n");
                  out.write("                </tr>\n");
                  out.write("\t\t");
                  int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f10.doAfterBody();
                  errorDriverClass = (java.lang.Object) _jspx_page_context.findAttribute("errorDriverClass");
                  if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                    break;
                } while (true);
                if (_jspx_eval_mvc_005ffragmentValue_005f10 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.popBody();
                }
              }
              if (_jspx_th_mvc_005ffragmentValue_005f10.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f10);
                return;
              }
              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f10);
              out.write("\n");
              out.write("\n");
              out.write("    ");
              //  mvc:fragmentValue
              org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f19 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
              _jspx_th_mvc_005ffragmentValue_005f19.setPageContext(_jspx_page_context);
              _jspx_th_mvc_005ffragmentValue_005f19.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f5);
              // /panels/dataSourceManagement/newDatasourceForm.jsp(190,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f19.setName("errorUserName");
              // /panels/dataSourceManagement/newDatasourceForm.jsp(190,4) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f19.setId("errorUserName");
              int _jspx_eval_mvc_005ffragmentValue_005f19 = _jspx_th_mvc_005ffragmentValue_005f19.doStartTag();
              if (_jspx_eval_mvc_005ffragmentValue_005f19 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                java.lang.Object errorUserName = null;
                if (_jspx_eval_mvc_005ffragmentValue_005f19 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.pushBody();
                  _jspx_th_mvc_005ffragmentValue_005f19.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                  _jspx_th_mvc_005ffragmentValue_005f19.doInitBody();
                }
                errorUserName = (java.lang.Object) _jspx_page_context.findAttribute("errorUserName");
                do {
                  out.write("\n");
                  out.write("                <tr id=\"");
                  if (_jspx_meth_panel_005fencode_005f25(_jspx_th_mvc_005ffragmentValue_005f19, _jspx_page_context))
                    return;
                  out.write("\" style=\"display:none\">\n");
                  out.write("                    <td width=\"150px\" align=\"right\" class=\"skn-even_row\">\n");
                  out.write("                        <span class=\"");
                  out.print(((Boolean)errorUserName).booleanValue()?"skn-error":"");
                  out.write("\">\n");
                  out.write("                            ");
                  if (_jspx_meth_i18n_005fmessage_005f9(_jspx_th_mvc_005ffragmentValue_005f19, _jspx_page_context))
                    return;
                  out.write("\n");
                  out.write("                        </span>\n");
                  out.write("\n");
                  out.write("                    </td>\n");
                  out.write("                    <td align=\"left\">\n");
                  out.write("                        <input class=\"skn-input\"\n");
                  out.write("                               name=\"");
                  if (_jspx_meth_factory_005fbean_005f6(_jspx_th_mvc_005ffragmentValue_005f19, _jspx_page_context))
                    return;
                  out.write("\"\n");
                  out.write("                               value=\"");
                  //  mvc:fragmentValue
                  org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f20 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                  _jspx_th_mvc_005ffragmentValue_005f20.setPageContext(_jspx_page_context);
                  _jspx_th_mvc_005ffragmentValue_005f20.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f19);
                  // /panels/dataSourceManagement/newDatasourceForm.jsp(201,38) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                  _jspx_th_mvc_005ffragmentValue_005f20.setName("UserName");
                  int _jspx_eval_mvc_005ffragmentValue_005f20 = _jspx_th_mvc_005ffragmentValue_005f20.doStartTag();
                  if (_jspx_th_mvc_005ffragmentValue_005f20.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                    _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f20);
                    return;
                  }
                  _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f20);
                  out.write("\">\n");
                  out.write("                    </td>\n");
                  out.write("                </tr>\n");
                  out.write("    ");
                  int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f19.doAfterBody();
                  errorUserName = (java.lang.Object) _jspx_page_context.findAttribute("errorUserName");
                  if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                    break;
                } while (true);
                if (_jspx_eval_mvc_005ffragmentValue_005f19 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.popBody();
                }
              }
              if (_jspx_th_mvc_005ffragmentValue_005f19.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f19);
                return;
              }
              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f19);
              out.write("\n");
              out.write("\n");
              out.write("    ");
              //  mvc:fragmentValue
              org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f21 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
              _jspx_th_mvc_005ffragmentValue_005f21.setPageContext(_jspx_page_context);
              _jspx_th_mvc_005ffragmentValue_005f21.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f5);
              // /panels/dataSourceManagement/newDatasourceForm.jsp(206,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f21.setName("errorPassw");
              // /panels/dataSourceManagement/newDatasourceForm.jsp(206,4) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f21.setId("errorPassw");
              int _jspx_eval_mvc_005ffragmentValue_005f21 = _jspx_th_mvc_005ffragmentValue_005f21.doStartTag();
              if (_jspx_eval_mvc_005ffragmentValue_005f21 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                java.lang.Object errorPassw = null;
                if (_jspx_eval_mvc_005ffragmentValue_005f21 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.pushBody();
                  _jspx_th_mvc_005ffragmentValue_005f21.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                  _jspx_th_mvc_005ffragmentValue_005f21.doInitBody();
                }
                errorPassw = (java.lang.Object) _jspx_page_context.findAttribute("errorPassw");
                do {
                  out.write("\n");
                  out.write("                <tr id=\"");
                  if (_jspx_meth_panel_005fencode_005f26(_jspx_th_mvc_005ffragmentValue_005f21, _jspx_page_context))
                    return;
                  out.write("\" style=\"display:none\">\n");
                  out.write("                    <td width=\"150px\" align=\"right\" class=\"skn-even_row\">\n");
                  out.write("                        <span class=\"");
                  out.print(((Boolean)errorPassw).booleanValue()?"skn-error":"");
                  out.write("\">\n");
                  out.write("                            ");
                  if (_jspx_meth_i18n_005fmessage_005f10(_jspx_th_mvc_005ffragmentValue_005f21, _jspx_page_context))
                    return;
                  out.write("\n");
                  out.write("                        </span>\n");
                  out.write("                    </td>\n");
                  out.write("                    <td align=\"left\">\n");
                  out.write("                        <input type=\"password\"\n");
                  out.write("                               class=\"skn-input\"\n");
                  out.write("                               name=\"");
                  if (_jspx_meth_factory_005fbean_005f7(_jspx_th_mvc_005ffragmentValue_005f21, _jspx_page_context))
                    return;
                  out.write("\"\n");
                  out.write("                               value=\"");
                  //  mvc:fragmentValue
                  org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f22 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                  _jspx_th_mvc_005ffragmentValue_005f22.setPageContext(_jspx_page_context);
                  _jspx_th_mvc_005ffragmentValue_005f22.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f21);
                  // /panels/dataSourceManagement/newDatasourceForm.jsp(217,38) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                  _jspx_th_mvc_005ffragmentValue_005f22.setName("Passw");
                  int _jspx_eval_mvc_005ffragmentValue_005f22 = _jspx_th_mvc_005ffragmentValue_005f22.doStartTag();
                  if (_jspx_th_mvc_005ffragmentValue_005f22.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                    _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f22);
                    return;
                  }
                  _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f22);
                  out.write("\">\n");
                  out.write("                    </td>\n");
                  out.write("                </tr>\n");
                  out.write("    ");
                  int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f21.doAfterBody();
                  errorPassw = (java.lang.Object) _jspx_page_context.findAttribute("errorPassw");
                  if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                    break;
                } while (true);
                if (_jspx_eval_mvc_005ffragmentValue_005f21 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.popBody();
                }
              }
              if (_jspx_th_mvc_005ffragmentValue_005f21.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f21);
                return;
              }
              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f21);
              out.write('\n');
              int evalDoAfterBody = _jspx_th_mvc_005ffragment_005f5.doAfterBody();
              if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                break;
            } while (true);
            if (_jspx_eval_mvc_005ffragment_005f5 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
              out = _jspx_page_context.popBody();
            }
          }
          if (_jspx_th_mvc_005ffragment_005f5.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
            _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f5);
            return;
          }
          _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f5);
          out.write('\n');
          //  mvc:fragment
          org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f6 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
          _jspx_th_mvc_005ffragment_005f6.setPageContext(_jspx_page_context);
          _jspx_th_mvc_005ffragment_005f6.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
          // /panels/dataSourceManagement/newDatasourceForm.jsp(222,0) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
          _jspx_th_mvc_005ffragment_005f6.setName("ouputTestQ");
          int _jspx_eval_mvc_005ffragment_005f6 = _jspx_th_mvc_005ffragment_005f6.doStartTag();
          if (_jspx_eval_mvc_005ffragment_005f6 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
            if (_jspx_eval_mvc_005ffragment_005f6 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
              out = _jspx_page_context.pushBody();
              _jspx_th_mvc_005ffragment_005f6.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
              _jspx_th_mvc_005ffragment_005f6.doInitBody();
            }
            do {
              out.write("\n");
              out.write("    ");
              //  mvc:fragmentValue
              org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f23 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
              _jspx_th_mvc_005ffragmentValue_005f23.setPageContext(_jspx_page_context);
              _jspx_th_mvc_005ffragmentValue_005f23.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f6);
              // /panels/dataSourceManagement/newDatasourceForm.jsp(223,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f23.setName("errorTestQ");
              // /panels/dataSourceManagement/newDatasourceForm.jsp(223,4) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f23.setId("errorTestQ");
              int _jspx_eval_mvc_005ffragmentValue_005f23 = _jspx_th_mvc_005ffragmentValue_005f23.doStartTag();
              if (_jspx_eval_mvc_005ffragmentValue_005f23 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                java.lang.Object errorTestQ = null;
                if (_jspx_eval_mvc_005ffragmentValue_005f23 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.pushBody();
                  _jspx_th_mvc_005ffragmentValue_005f23.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                  _jspx_th_mvc_005ffragmentValue_005f23.doInitBody();
                }
                errorTestQ = (java.lang.Object) _jspx_page_context.findAttribute("errorTestQ");
                do {
                  out.write("\n");
                  out.write("                <tr id=\"");
                  if (_jspx_meth_panel_005fencode_005f27(_jspx_th_mvc_005ffragmentValue_005f23, _jspx_page_context))
                    return;
                  out.write("\" style=\"display:none\">\n");
                  out.write("                    <td valign=\"top\" width=\"150px\" align=\"right\" class=\"skn-even_row\">\n");
                  out.write("                        <span class=\"");
                  out.print(((Boolean)errorTestQ).booleanValue()?"skn-error":"");
                  out.write("\">\n");
                  out.write("                            ");
                  if (_jspx_meth_i18n_005fmessage_005f11(_jspx_th_mvc_005ffragmentValue_005f23, _jspx_page_context))
                    return;
                  out.write("\n");
                  out.write("                        </span>\n");
                  out.write("                    </td>\n");
                  out.write("                    <td align=\"left\">\n");
                  out.write("                        <textarea class=\"skn-input\" cols=\"52\" rows=\"8\"\n");
                  out.write("                                  id=\"");
                  if (_jspx_meth_panel_005fencode_005f28(_jspx_th_mvc_005ffragmentValue_005f23, _jspx_page_context))
                    return;
                  out.write("\"\n");
                  out.write("                                  name=\"");
                  if (_jspx_meth_factory_005fbean_005f8(_jspx_th_mvc_005ffragmentValue_005f23, _jspx_page_context))
                    return;
                  out.write("\"\n");
                  out.write("                                >");
                  //  mvc:fragmentValue
                  org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f24 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                  _jspx_th_mvc_005ffragmentValue_005f24.setPageContext(_jspx_page_context);
                  _jspx_th_mvc_005ffragmentValue_005f24.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f23);
                  // /panels/dataSourceManagement/newDatasourceForm.jsp(234,33) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                  _jspx_th_mvc_005ffragmentValue_005f24.setName("TestQ");
                  int _jspx_eval_mvc_005ffragmentValue_005f24 = _jspx_th_mvc_005ffragmentValue_005f24.doStartTag();
                  if (_jspx_th_mvc_005ffragmentValue_005f24.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                    _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f24);
                    return;
                  }
                  _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f24);
                  out.write("</textarea>\n");
                  out.write("                    </td>\n");
                  out.write("                </tr>\n");
                  out.write("    ");
                  int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f23.doAfterBody();
                  errorTestQ = (java.lang.Object) _jspx_page_context.findAttribute("errorTestQ");
                  if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                    break;
                } while (true);
                if (_jspx_eval_mvc_005ffragmentValue_005f23 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.popBody();
                }
              }
              if (_jspx_th_mvc_005ffragmentValue_005f23.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f23);
                return;
              }
              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f23);
              out.write('\n');
              int evalDoAfterBody = _jspx_th_mvc_005ffragment_005f6.doAfterBody();
              if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                break;
            } while (true);
            if (_jspx_eval_mvc_005ffragment_005f6 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
              out = _jspx_page_context.popBody();
            }
          }
          if (_jspx_th_mvc_005ffragment_005f6.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
            _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f6);
            return;
          }
          _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f6);
          out.write('\n');
          out.write('\n');
          //  mvc:fragment
          org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f7 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
          _jspx_th_mvc_005ffragment_005f7.setPageContext(_jspx_page_context);
          _jspx_th_mvc_005ffragment_005f7.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
          // /panels/dataSourceManagement/newDatasourceForm.jsp(240,0) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
          _jspx_th_mvc_005ffragment_005f7.setName("outputResult");
          int _jspx_eval_mvc_005ffragment_005f7 = _jspx_th_mvc_005ffragment_005f7.doStartTag();
          if (_jspx_eval_mvc_005ffragment_005f7 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
            if (_jspx_eval_mvc_005ffragment_005f7 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
              out = _jspx_page_context.pushBody();
              _jspx_th_mvc_005ffragment_005f7.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
              _jspx_th_mvc_005ffragment_005f7.doInitBody();
            }
            do {
              out.write("\n");
              out.write("    ");
              //  mvc:fragmentValue
              org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f25 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
              _jspx_th_mvc_005ffragmentValue_005f25.setPageContext(_jspx_page_context);
              _jspx_th_mvc_005ffragmentValue_005f25.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f7);
              // /panels/dataSourceManagement/newDatasourceForm.jsp(241,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f25.setName("testResult");
              // /panels/dataSourceManagement/newDatasourceForm.jsp(241,4) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f25.setId("testResult");
              int _jspx_eval_mvc_005ffragmentValue_005f25 = _jspx_th_mvc_005ffragmentValue_005f25.doStartTag();
              if (_jspx_eval_mvc_005ffragmentValue_005f25 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                java.lang.Object testResult = null;
                if (_jspx_eval_mvc_005ffragmentValue_005f25 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.pushBody();
                  _jspx_th_mvc_005ffragmentValue_005f25.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                  _jspx_th_mvc_005ffragmentValue_005f25.doInitBody();
                }
                testResult = (java.lang.Object) _jspx_page_context.findAttribute("testResult");
                do {
                  out.write("\n");
                  out.write("                <tr>\n");
                  out.write("                    <td colspan=\"2\" style=\"margin:10px; text-align:left; width:100%\">\n");
                  out.write("                        <div class=\"skn-background_alt\" style=\"width:100%;\">\n");

    String result = (String)testResult;
    if(DataSourceManagementHandler.RESULT_OK.equals(result)){

                  out.write("\n");
                  out.write("                        <table border=\"0\" cellspacing=\"3\" cellpadding=\"4\" style=\"width:100%; text-align:left;\">\n");
                  out.write("                            <tr align=\"left\">\n");
                  out.write("                                <td style=\"vertical-align:top; width:20px;\">\n");
                  out.write("                                    <img src=\"");
                  if (_jspx_meth_static_005fimage_005f0(_jspx_th_mvc_005ffragmentValue_005f25, _jspx_page_context))
                    return;
                  out.write("\" border=\"0\" />\n");
                  out.write("                                </td>\n");
                  out.write("                                <td>\n");
                  out.write("                                    ");
                  if (_jspx_meth_i18n_005fmessage_005f12(_jspx_th_mvc_005ffragmentValue_005f25, _jspx_page_context))
                    return;
                  out.write("\n");
                  out.write("                                </td>\n");
                  out.write("                            </tr>\n");
                  out.write("                        </table>\n");

    } else if(!"".equals(result)) {

                  out.write("\n");
                  out.write("                        <table border=\"0\" cellspacing=\"3\" cellpadding=\"4\" style=\"width:100%; text-align:left;\">\n");
                  out.write("                            <tr align=\"left\">\n");
                  out.write("                                <td style=\"vertical-align:top; width:20px;\">\n");
                  out.write("                                    <img src=\"");
                  if (_jspx_meth_static_005fimage_005f1(_jspx_th_mvc_005ffragmentValue_005f25, _jspx_page_context))
                    return;
                  out.write("\" border=\"0\" />\n");
                  out.write("                                </td>\n");
                  out.write("                                <td>\n");
                  out.write("                                    <span class=\"skn-error\">\n");
                  out.write("                                        ");
                  if (_jspx_meth_i18n_005fmessage_005f13(_jspx_th_mvc_005ffragmentValue_005f25, _jspx_page_context))
                    return;
                  out.write("<br>");
                  out.print(testResult);
                  out.write("\n");
                  out.write("                                    </span>\n");
                  out.write("                                </td>\n");
                  out.write("                            </tr>\n");
                  out.write("                        </table>\n");

    }

                  out.write("                  </div>\n");
                  out.write("                    </td>\n");
                  out.write("                </tr>\n");
                  out.write("    ");
                  int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f25.doAfterBody();
                  testResult = (java.lang.Object) _jspx_page_context.findAttribute("testResult");
                  if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                    break;
                } while (true);
                if (_jspx_eval_mvc_005ffragmentValue_005f25 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.popBody();
                }
              }
              if (_jspx_th_mvc_005ffragmentValue_005f25.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f25);
                return;
              }
              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f25);
              out.write('\n');
              int evalDoAfterBody = _jspx_th_mvc_005ffragment_005f7.doAfterBody();
              if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                break;
            } while (true);
            if (_jspx_eval_mvc_005ffragment_005f7 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
              out = _jspx_page_context.popBody();
            }
          }
          if (_jspx_th_mvc_005ffragment_005f7.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
            _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f7);
            return;
          }
          _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f7);
          out.write('\n');
          out.write('\n');
          if (_jspx_meth_mvc_005ffragment_005f8(_jspx_th_mvc_005fformatter_005f0, _jspx_page_context))
            return;
          out.write('\n');
          out.write('\n');
          out.write('	');
          if (_jspx_meth_mvc_005ffragment_005f9(_jspx_th_mvc_005fformatter_005f0, _jspx_page_context))
            return;
          out.write('\n');
          out.write('\n');
          out.write('	');
          if (_jspx_meth_mvc_005ffragment_005f10(_jspx_th_mvc_005fformatter_005f0, _jspx_page_context))
            return;
          out.write('\n');
          out.write('	');
          if (_jspx_meth_mvc_005ffragment_005f11(_jspx_th_mvc_005fformatter_005f0, _jspx_page_context))
            return;
          out.write("\n");
          out.write("\n");
          out.write("    ");
          if (_jspx_meth_mvc_005ffragment_005f12(_jspx_th_mvc_005fformatter_005f0, _jspx_page_context))
            return;
          out.write("\n");
          out.write("\n");
          out.write("    ");
          out.write("\n");
          out.write("\t\t\t\t");
          out.write("\n");
          out.write("\t\t\t\t\t\t\t ");
          out.write("\n");
          out.write("\t\t\t\t\t\t\t ");
          out.write("\n");
          out.write("\t\t\t\t\t\t\t ");
          out.write("\n");
          out.write("\t\t\t\t");
          out.write("\n");
          out.write("\t\t\t\t\t");
          out.write("\n");
          out.write("\t\t\t\t\t\t");
          out.write("\n");
          out.write("\t\t\t\t\t\t");
          out.write("\n");
          out.write("\t\t\t\t\t\t\t");
          out.write("\n");
          out.write("\t\t\t\t\t\t\t\t");
          out.write("\n");
          out.write("\t\t\t\t\t\t");
          out.write("\n");
          out.write("\t\t\t\t\t");
          out.write("\n");
          out.write("\t\t\t\t");
          out.write('\n');
          out.write('	');
          out.write('	');
          out.write('\n');
          out.write('\n');
          if (_jspx_meth_mvc_005ffragment_005f13(_jspx_th_mvc_005fformatter_005f0, _jspx_page_context))
            return;
          out.write('\n');
          out.write('\n');
          //  mvc:fragment
          org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f14 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
          _jspx_th_mvc_005ffragment_005f14.setPageContext(_jspx_page_context);
          _jspx_th_mvc_005ffragment_005f14.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
          // /panels/dataSourceManagement/newDatasourceForm.jsp(334,0) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
          _jspx_th_mvc_005ffragment_005f14.setName("outputEnd");
          int _jspx_eval_mvc_005ffragment_005f14 = _jspx_th_mvc_005ffragment_005f14.doStartTag();
          if (_jspx_eval_mvc_005ffragment_005f14 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
            if (_jspx_eval_mvc_005ffragment_005f14 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
              out = _jspx_page_context.pushBody();
              _jspx_th_mvc_005ffragment_005f14.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
              _jspx_th_mvc_005ffragment_005f14.doInitBody();
            }
            do {
              out.write("\n");
              out.write("\n");
              out.write("            </table>\n");
              out.write("\n");
              out.write("        </form>\n");
              out.write("        <script defer>\n");
              out.write("            setAjax('");
              if (_jspx_meth_panel_005fencode_005f36(_jspx_th_mvc_005ffragment_005f14, _jspx_page_context))
                return;
              out.write("');\n");
              out.write("        </script>\n");
              out.write("        <form action=\"");
              if (_jspx_meth_factory_005fformUrl_005f1(_jspx_th_mvc_005ffragment_005f14, _jspx_page_context))
                return;
              out.write("\" name='");
              if (_jspx_meth_panel_005fencode_005f37(_jspx_th_mvc_005ffragment_005f14, _jspx_page_context))
                return;
              out.write("' id=\"");
              if (_jspx_meth_panel_005fencode_005f38(_jspx_th_mvc_005ffragment_005f14, _jspx_page_context))
                return;
              out.write("\" style=\"margin:0px; padding:0px;\">\n");
              out.write("            ");
              if (_jspx_meth_factory_005fhandler_005f1(_jspx_th_mvc_005ffragment_005f14, _jspx_page_context))
                return;
              out.write("\n");
              out.write("        </form>\n");
              out.write("        <script defer>\n");
              out.write("            setAjax('");
              if (_jspx_meth_panel_005fencode_005f39(_jspx_th_mvc_005ffragment_005f14, _jspx_page_context))
                return;
              out.write("');\n");
              out.write("        </script>\n");
              out.write("        <form action=\"");
              if (_jspx_meth_factory_005fformUrl_005f2(_jspx_th_mvc_005ffragment_005f14, _jspx_page_context))
                return;
              out.write("\" name='");
              if (_jspx_meth_panel_005fencode_005f40(_jspx_th_mvc_005ffragment_005f14, _jspx_page_context))
                return;
              out.write("' id=\"");
              if (_jspx_meth_panel_005fencode_005f41(_jspx_th_mvc_005ffragment_005f14, _jspx_page_context))
                return;
              out.write("\" style=\"margin:0px; padding:0px;\">\n");
              out.write("            ");
              if (_jspx_meth_factory_005fhandler_005f2(_jspx_th_mvc_005ffragment_005f14, _jspx_page_context))
                return;
              out.write("\n");
              out.write("        </form>\n");
              out.write("        \n");
              out.write("        <div id=\"");
              if (_jspx_meth_panel_005fencode_005f42(_jspx_th_mvc_005ffragment_005f14, _jspx_page_context))
                return;
              out.write("\">\n");
              out.write("            ");
              org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "tableList.jsp", out, true);
              out.write("\n");
              out.write("        </div>\n");
              out.write("\n");
              out.write("\n");
              out.write("    ");
              //  mvc:fragmentValue
              org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f26 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
              _jspx_th_mvc_005ffragmentValue_005f26.setPageContext(_jspx_page_context);
              _jspx_th_mvc_005ffragmentValue_005f26.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f14);
              // /panels/dataSourceManagement/newDatasourceForm.jsp(357,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f26.setName("typeSelect");
              // /panels/dataSourceManagement/newDatasourceForm.jsp(357,4) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f26.setId("typeSelect");
              int _jspx_eval_mvc_005ffragmentValue_005f26 = _jspx_th_mvc_005ffragmentValue_005f26.doStartTag();
              if (_jspx_eval_mvc_005ffragmentValue_005f26 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                java.lang.Object typeSelect = null;
                if (_jspx_eval_mvc_005ffragmentValue_005f26 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.pushBody();
                  _jspx_th_mvc_005ffragmentValue_005f26.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                  _jspx_th_mvc_005ffragmentValue_005f26.doInitBody();
                }
                typeSelect = (java.lang.Object) _jspx_page_context.findAttribute("typeSelect");
                do {
                  out.write("\n");
                  out.write("        <script type=\"text/javascript\" defer>\n");
                  out.write("\n");
                  out.write("    window.f = function() {\n");

    String type = (String)typeSelect;
    if (type != null || !"".equals(type)) {
        if(type.equals(DataSourceManagementHandler.JNDI_TYPE)) {

                  out.write("\n");
                  out.write("            document.getElementById('");
                  if (_jspx_meth_panel_005fencode_005f43(_jspx_th_mvc_005ffragmentValue_005f26, _jspx_page_context))
                    return;
                  out.write("').style.display = '';\n");
                  out.write("            document.getElementById('");
                  if (_jspx_meth_panel_005fencode_005f44(_jspx_th_mvc_005ffragmentValue_005f26, _jspx_page_context))
                    return;
                  out.write("').style.display = '';\n");
                  out.write("            document.getElementById('");
                  if (_jspx_meth_panel_005fencode_005f45(_jspx_th_mvc_005ffragmentValue_005f26, _jspx_page_context))
                    return;
                  out.write("').style.display = '';\n");
                  out.write("            document.getElementById('");
                  if (_jspx_meth_panel_005fencode_005f46(_jspx_th_mvc_005ffragmentValue_005f26, _jspx_page_context))
                    return;
                  out.write("').style.display = 'none';\n");
                  out.write("            document.getElementById('");
                  if (_jspx_meth_panel_005fencode_005f47(_jspx_th_mvc_005ffragmentValue_005f26, _jspx_page_context))
                    return;
                  out.write("').style.display = 'none';\n");
                  out.write("            document.getElementById('");
                  if (_jspx_meth_panel_005fencode_005f48(_jspx_th_mvc_005ffragmentValue_005f26, _jspx_page_context))
                    return;
                  out.write("').style.display = 'none';\n");
                  out.write("            document.getElementById('");
                  if (_jspx_meth_panel_005fencode_005f49(_jspx_th_mvc_005ffragmentValue_005f26, _jspx_page_context))
                    return;
                  out.write("').style.display = 'none';\n");

        } else if(type.equals(DataSourceManagementHandler.CUSTOM_TYPE)) {

                  out.write("\n");
                  out.write("            document.getElementById('");
                  if (_jspx_meth_panel_005fencode_005f50(_jspx_th_mvc_005ffragmentValue_005f26, _jspx_page_context))
                    return;
                  out.write("').style.display = '';\n");
                  out.write("            document.getElementById('");
                  if (_jspx_meth_panel_005fencode_005f51(_jspx_th_mvc_005ffragmentValue_005f26, _jspx_page_context))
                    return;
                  out.write("').style.display = '';\n");
                  out.write("            document.getElementById('");
                  if (_jspx_meth_panel_005fencode_005f52(_jspx_th_mvc_005ffragmentValue_005f26, _jspx_page_context))
                    return;
                  out.write("').style.display = '';\n");
                  out.write("            document.getElementById('");
                  if (_jspx_meth_panel_005fencode_005f53(_jspx_th_mvc_005ffragmentValue_005f26, _jspx_page_context))
                    return;
                  out.write("').style.display = '';\n");
                  out.write("            document.getElementById('");
                  if (_jspx_meth_panel_005fencode_005f54(_jspx_th_mvc_005ffragmentValue_005f26, _jspx_page_context))
                    return;
                  out.write("').style.display = '';\n");
                  out.write("            document.getElementById('");
                  if (_jspx_meth_panel_005fencode_005f55(_jspx_th_mvc_005ffragmentValue_005f26, _jspx_page_context))
                    return;
                  out.write("').style.display = 'none';\n");
                  out.write("            document.getElementById('");
                  if (_jspx_meth_panel_005fencode_005f56(_jspx_th_mvc_005ffragmentValue_005f26, _jspx_page_context))
                    return;
                  out.write("').style.display = '';\n");
                  out.write("\n");

        }
    }

                  out.write("\n");
                  out.write("    }\n");
                  out.write("    setTimeout(\"window.f()\",100);\n");
                  out.write("        </script>\n");
                  out.write("    ");
                  int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f26.doAfterBody();
                  typeSelect = (java.lang.Object) _jspx_page_context.findAttribute("typeSelect");
                  if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                    break;
                } while (true);
                if (_jspx_eval_mvc_005ffragmentValue_005f26 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.popBody();
                }
              }
              if (_jspx_th_mvc_005ffragmentValue_005f26.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f26);
                return;
              }
              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f26);
              out.write('\n');
              int evalDoAfterBody = _jspx_th_mvc_005ffragment_005f14.doAfterBody();
              if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                break;
            } while (true);
            if (_jspx_eval_mvc_005ffragment_005f14 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
              out = _jspx_page_context.popBody();
            }
          }
          if (_jspx_th_mvc_005ffragment_005f14.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
            _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f14);
            return;
          }
          _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f14);
          out.write('\n');
          int evalDoAfterBody = _jspx_th_mvc_005fformatter_005f0.doAfterBody();
          if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
            break;
        } while (true);
        if (_jspx_eval_mvc_005fformatter_005f0 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
          out = _jspx_page_context.popBody();
        }
      }
      if (_jspx_th_mvc_005fformatter_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
        _005fjspx_005ftagPool_005fmvc_005fformatter_0026_005fname.reuse(_jspx_th_mvc_005fformatter_005f0);
        return;
      }
      _005fjspx_005ftagPool_005fmvc_005fformatter_0026_005fname.reuse(_jspx_th_mvc_005fformatter_005f0);
      out.write('\n');

    } catch (Exception e) {
        e.printStackTrace();
    }

      out.write('\n');
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

  private boolean _jspx_meth_i18n_005fmessage_005f0(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  i18n:message
    org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f0 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.get(org.apache.taglibs.i18n.MessageTag.class);
    _jspx_th_i18n_005fmessage_005f0.setPageContext(_jspx_page_context);
    _jspx_th_i18n_005fmessage_005f0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f0);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(36,109) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_i18n_005fmessage_005f0.setKey("datasource.edit.title");
    int _jspx_eval_i18n_005fmessage_005f0 = _jspx_th_i18n_005fmessage_005f0.doStartTag();
    if (_jspx_eval_i18n_005fmessage_005f0 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_i18n_005fmessage_005f0 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_i18n_005fmessage_005f0.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_i18n_005fmessage_005f0.doInitBody();
      }
      do {
        out.write("!!EDITAR");
        int evalDoAfterBody = _jspx_th_i18n_005fmessage_005f0.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_i18n_005fmessage_005f0 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.popBody();
      }
    }
    if (_jspx_th_i18n_005fmessage_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f0);
    return false;
  }

  private boolean _jspx_meth_mvc_005ffragment_005f1(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005fformatter_005f0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:fragment
    org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f1 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
    _jspx_th_mvc_005ffragment_005f1.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005ffragment_005f1.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(43,0) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005ffragment_005f1.setName("outputStart");
    int _jspx_eval_mvc_005ffragment_005f1 = _jspx_th_mvc_005ffragment_005f1.doStartTag();
    if (_jspx_eval_mvc_005ffragment_005f1 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_mvc_005ffragment_005f1 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_mvc_005ffragment_005f1.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_mvc_005ffragment_005f1.doInitBody();
      }
      do {
        out.write("\n");
        out.write("    <form action=\"");
        if (_jspx_meth_factory_005fformUrl_005f0(_jspx_th_mvc_005ffragment_005f1, _jspx_page_context))
          return true;
        out.write("\" name='");
        if (_jspx_meth_panel_005fencode_005f0(_jspx_th_mvc_005ffragment_005f1, _jspx_page_context))
          return true;
        out.write("' id=\"");
        if (_jspx_meth_panel_005fencode_005f1(_jspx_th_mvc_005ffragment_005f1, _jspx_page_context))
          return true;
        out.write("\" style=\"margin:0px; padding:0px;\">\n");
        out.write("            ");
        if (_jspx_meth_factory_005fhandler_005f0(_jspx_th_mvc_005ffragment_005f1, _jspx_page_context))
          return true;
        out.write("\n");
        out.write("    <table class=\"skn-table_border\" align=\"center\" width=\"800px\" cellspacing=\"1\" cellpadding=\"4\" border=\"0\">\n");
        int evalDoAfterBody = _jspx_th_mvc_005ffragment_005f1.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_mvc_005ffragment_005f1 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.popBody();
      }
    }
    if (_jspx_th_mvc_005ffragment_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f1);
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f1);
    return false;
  }

  private boolean _jspx_meth_factory_005fformUrl_005f0(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragment_005f1, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  factory:formUrl
    org.jboss.dashboard.ui.taglib.factory.FormURLTag _jspx_th_factory_005fformUrl_005f0 = (org.jboss.dashboard.ui.taglib.factory.FormURLTag) _005fjspx_005ftagPool_005ffactory_005fformUrl_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.FormURLTag.class);
    _jspx_th_factory_005fformUrl_005f0.setPageContext(_jspx_page_context);
    _jspx_th_factory_005fformUrl_005f0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f1);
    int _jspx_eval_factory_005fformUrl_005f0 = _jspx_th_factory_005fformUrl_005f0.doStartTag();
    if (_jspx_th_factory_005fformUrl_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005ffactory_005fformUrl_005fnobody.reuse(_jspx_th_factory_005fformUrl_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005ffactory_005fformUrl_005fnobody.reuse(_jspx_th_factory_005fformUrl_005f0);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f0(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragment_005f1, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f0 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f0.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f1);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(44,44) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f0.setName("formDS");
    int _jspx_eval_panel_005fencode_005f0 = _jspx_th_panel_005fencode_005f0.doStartTag();
    if (_jspx_th_panel_005fencode_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f0);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f1(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragment_005f1, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f1 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f1.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f1.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f1);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(44,79) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f1.setName("formDS");
    int _jspx_eval_panel_005fencode_005f1 = _jspx_th_panel_005fencode_005f1.doStartTag();
    if (_jspx_th_panel_005fencode_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f1);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f1);
    return false;
  }

  private boolean _jspx_meth_factory_005fhandler_005f0(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragment_005f1, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  factory:handler
    org.jboss.dashboard.ui.taglib.factory.HandlerTag _jspx_th_factory_005fhandler_005f0 = (org.jboss.dashboard.ui.taglib.factory.HandlerTag) _005fjspx_005ftagPool_005ffactory_005fhandler_0026_005fbean_005faction_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.HandlerTag.class);
    _jspx_th_factory_005fhandler_005f0.setPageContext(_jspx_page_context);
    _jspx_th_factory_005fhandler_005f0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f1);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(45,12) name = bean type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005fhandler_005f0.setBean("org.jboss.dashboard.ui.panel.dataSourceManagement.DataSourceManagementHandler");
    // /panels/dataSourceManagement/newDatasourceForm.jsp(45,12) name = action type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005fhandler_005f0.setAction("CreateDatasource");
    int _jspx_eval_factory_005fhandler_005f0 = _jspx_th_factory_005fhandler_005f0.doStartTag();
    if (_jspx_th_factory_005fhandler_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005ffactory_005fhandler_0026_005fbean_005faction_005fnobody.reuse(_jspx_th_factory_005fhandler_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005ffactory_005fhandler_0026_005fbean_005faction_005fnobody.reuse(_jspx_th_factory_005fhandler_005f0);
    return false;
  }

  private boolean _jspx_meth_i18n_005fmessage_005f1(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f3, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  i18n:message
    org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f1 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.get(org.apache.taglibs.i18n.MessageTag.class);
    _jspx_th_i18n_005fmessage_005f1.setPageContext(_jspx_page_context);
    _jspx_th_i18n_005fmessage_005f1.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f3);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(56,28) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_i18n_005fmessage_005f1.setKey("datasource.type");
    int _jspx_eval_i18n_005fmessage_005f1 = _jspx_th_i18n_005fmessage_005f1.doStartTag();
    if (_jspx_eval_i18n_005fmessage_005f1 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_i18n_005fmessage_005f1 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_i18n_005fmessage_005f1.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_i18n_005fmessage_005f1.doInitBody();
      }
      do {
        out.write("!!!Tipo");
        int evalDoAfterBody = _jspx_th_i18n_005fmessage_005f1.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_i18n_005fmessage_005f1 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.popBody();
      }
    }
    if (_jspx_th_i18n_005fmessage_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f1);
      return true;
    }
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f1);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f2(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f3, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f2 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f2.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f2.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f3);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(62,69) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f2.setName("nameTR");
    int _jspx_eval_panel_005fencode_005f2 = _jspx_th_panel_005fencode_005f2.doStartTag();
    if (_jspx_th_panel_005fencode_005f2.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f2);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f2);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f3(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f3, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f3 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f3.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f3.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f3);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(63,69) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f3.setName("jndiTR");
    int _jspx_eval_panel_005fencode_005f3 = _jspx_th_panel_005fencode_005f3.doStartTag();
    if (_jspx_th_panel_005fencode_005f3.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f3);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f3);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f4(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f3, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f4 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f4.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f4.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f3);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(64,69) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f4.setName("testQTR");
    int _jspx_eval_panel_005fencode_005f4 = _jspx_th_panel_005fencode_005f4.doStartTag();
    if (_jspx_th_panel_005fencode_005f4.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f4);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f4);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f5(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f3, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f5 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f5.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f5.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f3);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(65,69) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f5.setName("testQuery");
    int _jspx_eval_panel_005fencode_005f5 = _jspx_th_panel_005fencode_005f5.doStartTag();
    if (_jspx_th_panel_005fencode_005f5.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f5);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f5);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f6(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f3, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f6 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f6.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f6.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f3);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(66,69) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f6.setName("outputUrlTR");
    int _jspx_eval_panel_005fencode_005f6 = _jspx_th_panel_005fencode_005f6.doStartTag();
    if (_jspx_th_panel_005fencode_005f6.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f6);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f6);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f7(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f3, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f7 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f7.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f7.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f3);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(67,69) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f7.setName("outputDBTypeTR");
    int _jspx_eval_panel_005fencode_005f7 = _jspx_th_panel_005fencode_005f7.doStartTag();
    if (_jspx_th_panel_005fencode_005f7.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f7);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f7);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f8(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f3, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f8 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f8.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f8.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f3);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(68,69) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f8.setName("outputUserNameTR");
    int _jspx_eval_panel_005fencode_005f8 = _jspx_th_panel_005fencode_005f8.doStartTag();
    if (_jspx_th_panel_005fencode_005f8.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f8);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f8);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f9(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f3, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f9 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f9.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f9.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f3);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(69,69) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f9.setName("outputUserPwdTR");
    int _jspx_eval_panel_005fencode_005f9 = _jspx_th_panel_005fencode_005f9.doStartTag();
    if (_jspx_th_panel_005fencode_005f9.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f9);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f9);
    return false;
  }

  private boolean _jspx_meth_factory_005fbean_005f0(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f3, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  factory:bean
    org.jboss.dashboard.ui.taglib.factory.BeanTag _jspx_th_factory_005fbean_005f0 = (org.jboss.dashboard.ui.taglib.factory.BeanTag) _005fjspx_005ftagPool_005ffactory_005fbean_0026_005fproperty_005fbean_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.BeanTag.class);
    _jspx_th_factory_005fbean_005f0.setPageContext(_jspx_page_context);
    _jspx_th_factory_005fbean_005f0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f3);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(71,37) name = bean type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005fbean_005f0.setBean("org.jboss.dashboard.ui.panel.dataSourceManagement.DataSourceManagementHandler");
    // /panels/dataSourceManagement/newDatasourceForm.jsp(71,37) name = property type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005fbean_005f0.setProperty("type");
    int _jspx_eval_factory_005fbean_005f0 = _jspx_th_factory_005fbean_005f0.doStartTag();
    if (_jspx_th_factory_005fbean_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005ffactory_005fbean_0026_005fproperty_005fbean_005fnobody.reuse(_jspx_th_factory_005fbean_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005ffactory_005fbean_0026_005fproperty_005fbean_005fnobody.reuse(_jspx_th_factory_005fbean_005f0);
    return false;
  }

  private boolean _jspx_meth_i18n_005fmessage_005f2(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f3, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  i18n:message
    org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f2 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.get(org.apache.taglibs.i18n.MessageTag.class);
    _jspx_th_i18n_005fmessage_005f2.setPageContext(_jspx_page_context);
    _jspx_th_i18n_005fmessage_005f2.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f3);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(74,24) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_i18n_005fmessage_005f2.setKey("datasource.data.jndi");
    int _jspx_eval_i18n_005fmessage_005f2 = _jspx_th_i18n_005fmessage_005f2.doStartTag();
    if (_jspx_eval_i18n_005fmessage_005f2 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_i18n_005fmessage_005f2 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_i18n_005fmessage_005f2.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_i18n_005fmessage_005f2.doInitBody();
      }
      do {
        out.write("!!JNDI");
        int evalDoAfterBody = _jspx_th_i18n_005fmessage_005f2.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_i18n_005fmessage_005f2 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.popBody();
      }
    }
    if (_jspx_th_i18n_005fmessage_005f2.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f2);
      return true;
    }
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f2);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f10(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f3, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f10 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f10.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f10.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f3);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(77,82) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f10.setName("nameTR");
    int _jspx_eval_panel_005fencode_005f10 = _jspx_th_panel_005fencode_005f10.doStartTag();
    if (_jspx_th_panel_005fencode_005f10.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f10);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f10);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f11(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f3, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f11 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f11.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f11.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f3);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(78,82) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f11.setName("outputUrlTR");
    int _jspx_eval_panel_005fencode_005f11 = _jspx_th_panel_005fencode_005f11.doStartTag();
    if (_jspx_th_panel_005fencode_005f11.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f11);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f11);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f12(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f3, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f12 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f12.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f12.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f3);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(79,82) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f12.setName("outputDBTypeTR");
    int _jspx_eval_panel_005fencode_005f12 = _jspx_th_panel_005fencode_005f12.doStartTag();
    if (_jspx_th_panel_005fencode_005f12.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f12);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f12);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f13(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f3, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f13 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f13.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f13.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f3);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(80,82) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f13.setName("outputUserNameTR");
    int _jspx_eval_panel_005fencode_005f13 = _jspx_th_panel_005fencode_005f13.doStartTag();
    if (_jspx_th_panel_005fencode_005f13.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f13);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f13);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f14(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f3, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f14 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f14.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f14.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f3);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(81,82) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f14.setName("outputUserPwdTR");
    int _jspx_eval_panel_005fencode_005f14 = _jspx_th_panel_005fencode_005f14.doStartTag();
    if (_jspx_th_panel_005fencode_005f14.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f14);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f14);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f15(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f3, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f15 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f15.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f15.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f3);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(82,82) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f15.setName("testQTR");
    int _jspx_eval_panel_005fencode_005f15 = _jspx_th_panel_005fencode_005f15.doStartTag();
    if (_jspx_th_panel_005fencode_005f15.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f15);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f15);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f16(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f3, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f16 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f16.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f16.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f3);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(83,82) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f16.setName("testQuery");
    int _jspx_eval_panel_005fencode_005f16 = _jspx_th_panel_005fencode_005f16.doStartTag();
    if (_jspx_th_panel_005fencode_005f16.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f16);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f16);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f17(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f3, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f17 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f17.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f17.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f3);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(84,82) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f17.setName("jndiTR");
    int _jspx_eval_panel_005fencode_005f17 = _jspx_th_panel_005fencode_005f17.doStartTag();
    if (_jspx_th_panel_005fencode_005f17.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f17);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f17);
    return false;
  }

  private boolean _jspx_meth_factory_005fbean_005f1(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f3, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  factory:bean
    org.jboss.dashboard.ui.taglib.factory.BeanTag _jspx_th_factory_005fbean_005f1 = (org.jboss.dashboard.ui.taglib.factory.BeanTag) _005fjspx_005ftagPool_005ffactory_005fbean_0026_005fproperty_005fbean_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.BeanTag.class);
    _jspx_th_factory_005fbean_005f1.setPageContext(_jspx_page_context);
    _jspx_th_factory_005fbean_005f1.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f3);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(86,37) name = bean type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005fbean_005f1.setBean("org.jboss.dashboard.ui.panel.dataSourceManagement.DataSourceManagementHandler");
    // /panels/dataSourceManagement/newDatasourceForm.jsp(86,37) name = property type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005fbean_005f1.setProperty("type");
    int _jspx_eval_factory_005fbean_005f1 = _jspx_th_factory_005fbean_005f1.doStartTag();
    if (_jspx_th_factory_005fbean_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005ffactory_005fbean_0026_005fproperty_005fbean_005fnobody.reuse(_jspx_th_factory_005fbean_005f1);
      return true;
    }
    _005fjspx_005ftagPool_005ffactory_005fbean_0026_005fproperty_005fbean_005fnobody.reuse(_jspx_th_factory_005fbean_005f1);
    return false;
  }

  private boolean _jspx_meth_i18n_005fmessage_005f3(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f3, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  i18n:message
    org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f3 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.get(org.apache.taglibs.i18n.MessageTag.class);
    _jspx_th_i18n_005fmessage_005f3.setPageContext(_jspx_page_context);
    _jspx_th_i18n_005fmessage_005f3.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f3);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(89,24) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_i18n_005fmessage_005f3.setKey("datasource.data.custom");
    int _jspx_eval_i18n_005fmessage_005f3 = _jspx_th_i18n_005fmessage_005f3.doStartTag();
    if (_jspx_eval_i18n_005fmessage_005f3 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_i18n_005fmessage_005f3 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_i18n_005fmessage_005f3.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_i18n_005fmessage_005f3.doInitBody();
      }
      do {
        out.write("!!A medida");
        int evalDoAfterBody = _jspx_th_i18n_005fmessage_005f3.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_i18n_005fmessage_005f3 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.popBody();
      }
    }
    if (_jspx_th_i18n_005fmessage_005f3.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f3);
      return true;
    }
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f3);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f18(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f4, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f18 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f18.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f18.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f4);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(100,24) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f18.setName("nameTR");
    int _jspx_eval_panel_005fencode_005f18 = _jspx_th_panel_005fencode_005f18.doStartTag();
    if (_jspx_th_panel_005fencode_005f18.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f18);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f18);
    return false;
  }

  private boolean _jspx_meth_i18n_005fmessage_005f4(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f4, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  i18n:message
    org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f4 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.get(org.apache.taglibs.i18n.MessageTag.class);
    _jspx_th_i18n_005fmessage_005f4.setPageContext(_jspx_page_context);
    _jspx_th_i18n_005fmessage_005f4.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f4);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(103,28) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_i18n_005fmessage_005f4.setKey("datasource.data.name");
    int _jspx_eval_i18n_005fmessage_005f4 = _jspx_th_i18n_005fmessage_005f4.doStartTag();
    if (_jspx_eval_i18n_005fmessage_005f4 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_i18n_005fmessage_005f4 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_i18n_005fmessage_005f4.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_i18n_005fmessage_005f4.doInitBody();
      }
      do {
        out.write("* !!!Name");
        int evalDoAfterBody = _jspx_th_i18n_005fmessage_005f4.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_i18n_005fmessage_005f4 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.popBody();
      }
    }
    if (_jspx_th_i18n_005fmessage_005f4.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f4);
      return true;
    }
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f4);
    return false;
  }

  private boolean _jspx_meth_factory_005fbean_005f2(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f4, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  factory:bean
    org.jboss.dashboard.ui.taglib.factory.BeanTag _jspx_th_factory_005fbean_005f2 = (org.jboss.dashboard.ui.taglib.factory.BeanTag) _005fjspx_005ftagPool_005ffactory_005fbean_0026_005fproperty_005fbean_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.BeanTag.class);
    _jspx_th_factory_005fbean_005f2.setPageContext(_jspx_page_context);
    _jspx_th_factory_005fbean_005f2.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f4);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(108,37) name = bean type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005fbean_005f2.setBean("org.jboss.dashboard.ui.panel.dataSourceManagement.DataSourceManagementHandler");
    // /panels/dataSourceManagement/newDatasourceForm.jsp(108,37) name = property type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005fbean_005f2.setProperty("name");
    int _jspx_eval_factory_005fbean_005f2 = _jspx_th_factory_005fbean_005f2.doStartTag();
    if (_jspx_th_factory_005fbean_005f2.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005ffactory_005fbean_0026_005fproperty_005fbean_005fnobody.reuse(_jspx_th_factory_005fbean_005f2);
      return true;
    }
    _005fjspx_005ftagPool_005ffactory_005fbean_0026_005fproperty_005fbean_005fnobody.reuse(_jspx_th_factory_005fbean_005f2);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f19(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f6, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f19 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f19.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f19.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f6);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(117,24) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f19.setName("jndiTR");
    int _jspx_eval_panel_005fencode_005f19 = _jspx_th_panel_005fencode_005f19.doStartTag();
    if (_jspx_th_panel_005fencode_005f19.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f19);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f19);
    return false;
  }

  private boolean _jspx_meth_i18n_005fmessage_005f5(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f6, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  i18n:message
    org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f5 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.get(org.apache.taglibs.i18n.MessageTag.class);
    _jspx_th_i18n_005fmessage_005f5.setPageContext(_jspx_page_context);
    _jspx_th_i18n_005fmessage_005f5.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f6);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(120,28) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_i18n_005fmessage_005f5.setKey("datasource.data.path");
    int _jspx_eval_i18n_005fmessage_005f5 = _jspx_th_i18n_005fmessage_005f5.doStartTag();
    if (_jspx_eval_i18n_005fmessage_005f5 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_i18n_005fmessage_005f5 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_i18n_005fmessage_005f5.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_i18n_005fmessage_005f5.doInitBody();
      }
      do {
        out.write("* !!!ruta");
        int evalDoAfterBody = _jspx_th_i18n_005fmessage_005f5.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_i18n_005fmessage_005f5 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.popBody();
      }
    }
    if (_jspx_th_i18n_005fmessage_005f5.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f5);
      return true;
    }
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f5);
    return false;
  }

  private boolean _jspx_meth_factory_005fbean_005f3(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f6, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  factory:bean
    org.jboss.dashboard.ui.taglib.factory.BeanTag _jspx_th_factory_005fbean_005f3 = (org.jboss.dashboard.ui.taglib.factory.BeanTag) _005fjspx_005ftagPool_005ffactory_005fbean_0026_005fproperty_005fbean_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.BeanTag.class);
    _jspx_th_factory_005fbean_005f3.setPageContext(_jspx_page_context);
    _jspx_th_factory_005fbean_005f3.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f6);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(125,37) name = bean type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005fbean_005f3.setBean("org.jboss.dashboard.ui.panel.dataSourceManagement.DataSourceManagementHandler");
    // /panels/dataSourceManagement/newDatasourceForm.jsp(125,37) name = property type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005fbean_005f3.setProperty("jndiPath");
    int _jspx_eval_factory_005fbean_005f3 = _jspx_th_factory_005fbean_005f3.doStartTag();
    if (_jspx_th_factory_005fbean_005f3.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005ffactory_005fbean_0026_005fproperty_005fbean_005fnobody.reuse(_jspx_th_factory_005fbean_005f3);
      return true;
    }
    _005fjspx_005ftagPool_005ffactory_005fbean_0026_005fproperty_005fbean_005fnobody.reuse(_jspx_th_factory_005fbean_005f3);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f20(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f8, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f20 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f20.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f20.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f8);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(136,24) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f20.setName("outputUrlTR");
    int _jspx_eval_panel_005fencode_005f20 = _jspx_th_panel_005fencode_005f20.doStartTag();
    if (_jspx_th_panel_005fencode_005f20.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f20);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f20);
    return false;
  }

  private boolean _jspx_meth_i18n_005fmessage_005f6(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f8, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  i18n:message
    org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f6 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.get(org.apache.taglibs.i18n.MessageTag.class);
    _jspx_th_i18n_005fmessage_005f6.setPageContext(_jspx_page_context);
    _jspx_th_i18n_005fmessage_005f6.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f8);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(139,28) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_i18n_005fmessage_005f6.setKey("datasource.data.url");
    int _jspx_eval_i18n_005fmessage_005f6 = _jspx_th_i18n_005fmessage_005f6.doStartTag();
    if (_jspx_eval_i18n_005fmessage_005f6 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_i18n_005fmessage_005f6 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_i18n_005fmessage_005f6.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_i18n_005fmessage_005f6.doInitBody();
      }
      do {
        out.write("* !!!url");
        int evalDoAfterBody = _jspx_th_i18n_005fmessage_005f6.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_i18n_005fmessage_005f6 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.popBody();
      }
    }
    if (_jspx_th_i18n_005fmessage_005f6.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f6);
      return true;
    }
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f6);
    return false;
  }

  private boolean _jspx_meth_factory_005fbean_005f4(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f8, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  factory:bean
    org.jboss.dashboard.ui.taglib.factory.BeanTag _jspx_th_factory_005fbean_005f4 = (org.jboss.dashboard.ui.taglib.factory.BeanTag) _005fjspx_005ftagPool_005ffactory_005fbean_0026_005fproperty_005fbean_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.BeanTag.class);
    _jspx_th_factory_005fbean_005f4.setPageContext(_jspx_page_context);
    _jspx_th_factory_005fbean_005f4.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f8);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(144,37) name = bean type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005fbean_005f4.setBean("org.jboss.dashboard.ui.panel.dataSourceManagement.DataSourceManagementHandler");
    // /panels/dataSourceManagement/newDatasourceForm.jsp(144,37) name = property type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005fbean_005f4.setProperty("url");
    int _jspx_eval_factory_005fbean_005f4 = _jspx_th_factory_005fbean_005f4.doStartTag();
    if (_jspx_th_factory_005fbean_005f4.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005ffactory_005fbean_0026_005fproperty_005fbean_005fnobody.reuse(_jspx_th_factory_005fbean_005f4);
      return true;
    }
    _005fjspx_005ftagPool_005ffactory_005fbean_0026_005fproperty_005fbean_005fnobody.reuse(_jspx_th_factory_005fbean_005f4);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f21(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f10, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f21 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f21.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f21.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f10);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(151,24) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f21.setName("outputDBTypeTR");
    int _jspx_eval_panel_005fencode_005f21 = _jspx_th_panel_005fencode_005f21.doStartTag();
    if (_jspx_th_panel_005fencode_005f21.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f21);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f21);
    return false;
  }

  private boolean _jspx_meth_i18n_005fmessage_005f7(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f10, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  i18n:message
    org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f7 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.get(org.apache.taglibs.i18n.MessageTag.class);
    _jspx_th_i18n_005fmessage_005f7.setPageContext(_jspx_page_context);
    _jspx_th_i18n_005fmessage_005f7.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f10);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(154,28) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_i18n_005fmessage_005f7.setKey("datasource.data.database");
    int _jspx_eval_i18n_005fmessage_005f7 = _jspx_th_i18n_005fmessage_005f7.doStartTag();
    if (_jspx_eval_i18n_005fmessage_005f7 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_i18n_005fmessage_005f7 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_i18n_005fmessage_005f7.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_i18n_005fmessage_005f7.doInitBody();
      }
      do {
        out.write("* !!!database type");
        int evalDoAfterBody = _jspx_th_i18n_005fmessage_005f7.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_i18n_005fmessage_005f7 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.popBody();
      }
    }
    if (_jspx_th_i18n_005fmessage_005f7.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f7);
      return true;
    }
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f7);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f22(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f10, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f22 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f22.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f22.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f10);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(162,61) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f22.setName("testQuery");
    int _jspx_eval_panel_005fencode_005f22 = _jspx_th_panel_005fencode_005f22.doStartTag();
    if (_jspx_th_panel_005fencode_005f22.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f22);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f22);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f23(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f10, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f23 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f23.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f23.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f10);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(162,122) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f23.setName("driverClassName");
    int _jspx_eval_panel_005fencode_005f23 = _jspx_th_panel_005fencode_005f23.doStartTag();
    if (_jspx_th_panel_005fencode_005f23.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f23);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f23);
    return false;
  }

  private boolean _jspx_meth_i18n_005fmessage_005f8(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f10, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  i18n:message
    org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f8 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.get(org.apache.taglibs.i18n.MessageTag.class);
    _jspx_th_i18n_005fmessage_005f8.setPageContext(_jspx_page_context);
    _jspx_th_i18n_005fmessage_005f8.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f10);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(179,26) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_i18n_005fmessage_005f8.setKey("datasource.data.database");
    int _jspx_eval_i18n_005fmessage_005f8 = _jspx_th_i18n_005fmessage_005f8.doStartTag();
    if (_jspx_eval_i18n_005fmessage_005f8 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_i18n_005fmessage_005f8 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_i18n_005fmessage_005f8.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_i18n_005fmessage_005f8.doInitBody();
      }
      do {
        out.write("* !!!database type");
        int evalDoAfterBody = _jspx_th_i18n_005fmessage_005f8.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_i18n_005fmessage_005f8 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.popBody();
      }
    }
    if (_jspx_th_i18n_005fmessage_005f8.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f8);
      return true;
    }
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f8);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f24(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f10, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f24 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f24.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f24.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f10);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(180,43) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f24.setName("driverClassName");
    int _jspx_eval_panel_005fencode_005f24 = _jspx_th_panel_005fencode_005f24.doStartTag();
    if (_jspx_th_panel_005fencode_005f24.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f24);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f24);
    return false;
  }

  private boolean _jspx_meth_factory_005fbean_005f5(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f10, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  factory:bean
    org.jboss.dashboard.ui.taglib.factory.BeanTag _jspx_th_factory_005fbean_005f5 = (org.jboss.dashboard.ui.taglib.factory.BeanTag) _005fjspx_005ftagPool_005ffactory_005fbean_0026_005fproperty_005fbean_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.BeanTag.class);
    _jspx_th_factory_005fbean_005f5.setPageContext(_jspx_page_context);
    _jspx_th_factory_005fbean_005f5.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f10);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(181,24) name = bean type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005fbean_005f5.setBean("org.jboss.dashboard.ui.panel.dataSourceManagement.DataSourceManagementHandler");
    // /panels/dataSourceManagement/newDatasourceForm.jsp(181,24) name = property type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005fbean_005f5.setProperty("driverClass");
    int _jspx_eval_factory_005fbean_005f5 = _jspx_th_factory_005fbean_005f5.doStartTag();
    if (_jspx_th_factory_005fbean_005f5.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005ffactory_005fbean_0026_005fproperty_005fbean_005fnobody.reuse(_jspx_th_factory_005fbean_005f5);
      return true;
    }
    _005fjspx_005ftagPool_005ffactory_005fbean_0026_005fproperty_005fbean_005fnobody.reuse(_jspx_th_factory_005fbean_005f5);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f25(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f19, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f25 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f25.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f25.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f19);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(191,24) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f25.setName("outputUserNameTR");
    int _jspx_eval_panel_005fencode_005f25 = _jspx_th_panel_005fencode_005f25.doStartTag();
    if (_jspx_th_panel_005fencode_005f25.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f25);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f25);
    return false;
  }

  private boolean _jspx_meth_i18n_005fmessage_005f9(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f19, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  i18n:message
    org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f9 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.get(org.apache.taglibs.i18n.MessageTag.class);
    _jspx_th_i18n_005fmessage_005f9.setPageContext(_jspx_page_context);
    _jspx_th_i18n_005fmessage_005f9.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f19);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(194,28) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_i18n_005fmessage_005f9.setKey("datasource.data.user");
    int _jspx_eval_i18n_005fmessage_005f9 = _jspx_th_i18n_005fmessage_005f9.doStartTag();
    if (_jspx_eval_i18n_005fmessage_005f9 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_i18n_005fmessage_005f9 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_i18n_005fmessage_005f9.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_i18n_005fmessage_005f9.doInitBody();
      }
      do {
        out.write("!!!User");
        int evalDoAfterBody = _jspx_th_i18n_005fmessage_005f9.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_i18n_005fmessage_005f9 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.popBody();
      }
    }
    if (_jspx_th_i18n_005fmessage_005f9.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f9);
      return true;
    }
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f9);
    return false;
  }

  private boolean _jspx_meth_factory_005fbean_005f6(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f19, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  factory:bean
    org.jboss.dashboard.ui.taglib.factory.BeanTag _jspx_th_factory_005fbean_005f6 = (org.jboss.dashboard.ui.taglib.factory.BeanTag) _005fjspx_005ftagPool_005ffactory_005fbean_0026_005fproperty_005fbean_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.BeanTag.class);
    _jspx_th_factory_005fbean_005f6.setPageContext(_jspx_page_context);
    _jspx_th_factory_005fbean_005f6.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f19);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(200,37) name = bean type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005fbean_005f6.setBean("org.jboss.dashboard.ui.panel.dataSourceManagement.DataSourceManagementHandler");
    // /panels/dataSourceManagement/newDatasourceForm.jsp(200,37) name = property type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005fbean_005f6.setProperty("userName");
    int _jspx_eval_factory_005fbean_005f6 = _jspx_th_factory_005fbean_005f6.doStartTag();
    if (_jspx_th_factory_005fbean_005f6.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005ffactory_005fbean_0026_005fproperty_005fbean_005fnobody.reuse(_jspx_th_factory_005fbean_005f6);
      return true;
    }
    _005fjspx_005ftagPool_005ffactory_005fbean_0026_005fproperty_005fbean_005fnobody.reuse(_jspx_th_factory_005fbean_005f6);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f26(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f21, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f26 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f26.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f26.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f21);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(207,24) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f26.setName("outputUserPwdTR");
    int _jspx_eval_panel_005fencode_005f26 = _jspx_th_panel_005fencode_005f26.doStartTag();
    if (_jspx_th_panel_005fencode_005f26.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f26);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f26);
    return false;
  }

  private boolean _jspx_meth_i18n_005fmessage_005f10(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f21, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  i18n:message
    org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f10 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.get(org.apache.taglibs.i18n.MessageTag.class);
    _jspx_th_i18n_005fmessage_005f10.setPageContext(_jspx_page_context);
    _jspx_th_i18n_005fmessage_005f10.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f21);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(210,28) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_i18n_005fmessage_005f10.setKey("datasource.data.passw");
    int _jspx_eval_i18n_005fmessage_005f10 = _jspx_th_i18n_005fmessage_005f10.doStartTag();
    if (_jspx_eval_i18n_005fmessage_005f10 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_i18n_005fmessage_005f10 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_i18n_005fmessage_005f10.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_i18n_005fmessage_005f10.doInitBody();
      }
      do {
        out.write("*!!! Password");
        int evalDoAfterBody = _jspx_th_i18n_005fmessage_005f10.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_i18n_005fmessage_005f10 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.popBody();
      }
    }
    if (_jspx_th_i18n_005fmessage_005f10.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f10);
      return true;
    }
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f10);
    return false;
  }

  private boolean _jspx_meth_factory_005fbean_005f7(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f21, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  factory:bean
    org.jboss.dashboard.ui.taglib.factory.BeanTag _jspx_th_factory_005fbean_005f7 = (org.jboss.dashboard.ui.taglib.factory.BeanTag) _005fjspx_005ftagPool_005ffactory_005fbean_0026_005fproperty_005fbean_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.BeanTag.class);
    _jspx_th_factory_005fbean_005f7.setPageContext(_jspx_page_context);
    _jspx_th_factory_005fbean_005f7.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f21);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(216,37) name = bean type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005fbean_005f7.setBean("org.jboss.dashboard.ui.panel.dataSourceManagement.DataSourceManagementHandler");
    // /panels/dataSourceManagement/newDatasourceForm.jsp(216,37) name = property type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005fbean_005f7.setProperty("password");
    int _jspx_eval_factory_005fbean_005f7 = _jspx_th_factory_005fbean_005f7.doStartTag();
    if (_jspx_th_factory_005fbean_005f7.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005ffactory_005fbean_0026_005fproperty_005fbean_005fnobody.reuse(_jspx_th_factory_005fbean_005f7);
      return true;
    }
    _005fjspx_005ftagPool_005ffactory_005fbean_0026_005fproperty_005fbean_005fnobody.reuse(_jspx_th_factory_005fbean_005f7);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f27(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f23, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f27 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f27.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f27.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f23);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(224,24) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f27.setName("testQTR");
    int _jspx_eval_panel_005fencode_005f27 = _jspx_th_panel_005fencode_005f27.doStartTag();
    if (_jspx_th_panel_005fencode_005f27.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f27);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f27);
    return false;
  }

  private boolean _jspx_meth_i18n_005fmessage_005f11(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f23, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  i18n:message
    org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f11 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.get(org.apache.taglibs.i18n.MessageTag.class);
    _jspx_th_i18n_005fmessage_005f11.setPageContext(_jspx_page_context);
    _jspx_th_i18n_005fmessage_005f11.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f23);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(227,28) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_i18n_005fmessage_005f11.setKey("datasource.data.testQ");
    int _jspx_eval_i18n_005fmessage_005f11 = _jspx_th_i18n_005fmessage_005f11.doStartTag();
    if (_jspx_eval_i18n_005fmessage_005f11 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_i18n_005fmessage_005f11 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_i18n_005fmessage_005f11.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_i18n_005fmessage_005f11.doInitBody();
      }
      do {
        out.write("*!!! testQuery");
        int evalDoAfterBody = _jspx_th_i18n_005fmessage_005f11.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_i18n_005fmessage_005f11 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.popBody();
      }
    }
    if (_jspx_th_i18n_005fmessage_005f11.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f11);
      return true;
    }
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f11);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f28(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f23, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f28 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f28.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f28.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f23);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(232,38) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f28.setName("testQuery");
    int _jspx_eval_panel_005fencode_005f28 = _jspx_th_panel_005fencode_005f28.doStartTag();
    if (_jspx_th_panel_005fencode_005f28.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f28);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f28);
    return false;
  }

  private boolean _jspx_meth_factory_005fbean_005f8(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f23, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  factory:bean
    org.jboss.dashboard.ui.taglib.factory.BeanTag _jspx_th_factory_005fbean_005f8 = (org.jboss.dashboard.ui.taglib.factory.BeanTag) _005fjspx_005ftagPool_005ffactory_005fbean_0026_005fproperty_005fbean_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.BeanTag.class);
    _jspx_th_factory_005fbean_005f8.setPageContext(_jspx_page_context);
    _jspx_th_factory_005fbean_005f8.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f23);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(233,40) name = bean type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005fbean_005f8.setBean("org.jboss.dashboard.ui.panel.dataSourceManagement.DataSourceManagementHandler");
    // /panels/dataSourceManagement/newDatasourceForm.jsp(233,40) name = property type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005fbean_005f8.setProperty("testQuery");
    int _jspx_eval_factory_005fbean_005f8 = _jspx_th_factory_005fbean_005f8.doStartTag();
    if (_jspx_th_factory_005fbean_005f8.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005ffactory_005fbean_0026_005fproperty_005fbean_005fnobody.reuse(_jspx_th_factory_005fbean_005f8);
      return true;
    }
    _005fjspx_005ftagPool_005ffactory_005fbean_0026_005fproperty_005fbean_005fnobody.reuse(_jspx_th_factory_005fbean_005f8);
    return false;
  }

  private boolean _jspx_meth_static_005fimage_005f0(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f25, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  static:image
    org.jboss.dashboard.ui.taglib.resource.ImageResolverTag _jspx_th_static_005fimage_005f0 = (org.jboss.dashboard.ui.taglib.resource.ImageResolverTag) _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.get(org.jboss.dashboard.ui.taglib.resource.ImageResolverTag.class);
    _jspx_th_static_005fimage_005f0.setPageContext(_jspx_page_context);
    _jspx_th_static_005fimage_005f0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f25);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(252,46) name = relativePath type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_static_005fimage_005f0.setRelativePath("general/16x16/ico-menu_permissions_g.png");
    int _jspx_eval_static_005fimage_005f0 = _jspx_th_static_005fimage_005f0.doStartTag();
    if (_jspx_th_static_005fimage_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.reuse(_jspx_th_static_005fimage_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.reuse(_jspx_th_static_005fimage_005f0);
    return false;
  }

  private boolean _jspx_meth_i18n_005fmessage_005f12(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f25, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  i18n:message
    org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f12 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.get(org.apache.taglibs.i18n.MessageTag.class);
    _jspx_th_i18n_005fmessage_005f12.setPageContext(_jspx_page_context);
    _jspx_th_i18n_005fmessage_005f12.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f25);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(255,36) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_i18n_005fmessage_005f12.setKey("datasource.test.ok");
    int _jspx_eval_i18n_005fmessage_005f12 = _jspx_th_i18n_005fmessage_005f12.doStartTag();
    if (_jspx_eval_i18n_005fmessage_005f12 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_i18n_005fmessage_005f12 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_i18n_005fmessage_005f12.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_i18n_005fmessage_005f12.doInitBody();
      }
      do {
        out.write("!!!OK");
        int evalDoAfterBody = _jspx_th_i18n_005fmessage_005f12.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_i18n_005fmessage_005f12 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.popBody();
      }
    }
    if (_jspx_th_i18n_005fmessage_005f12.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f12);
      return true;
    }
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f12);
    return false;
  }

  private boolean _jspx_meth_static_005fimage_005f1(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f25, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  static:image
    org.jboss.dashboard.ui.taglib.resource.ImageResolverTag _jspx_th_static_005fimage_005f1 = (org.jboss.dashboard.ui.taglib.resource.ImageResolverTag) _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.get(org.jboss.dashboard.ui.taglib.resource.ImageResolverTag.class);
    _jspx_th_static_005fimage_005f1.setPageContext(_jspx_page_context);
    _jspx_th_static_005fimage_005f1.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f25);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(265,46) name = relativePath type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_static_005fimage_005f1.setRelativePath("general/16x16/ico-menu_permissions_r.png");
    int _jspx_eval_static_005fimage_005f1 = _jspx_th_static_005fimage_005f1.doStartTag();
    if (_jspx_th_static_005fimage_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.reuse(_jspx_th_static_005fimage_005f1);
      return true;
    }
    _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.reuse(_jspx_th_static_005fimage_005f1);
    return false;
  }

  private boolean _jspx_meth_i18n_005fmessage_005f13(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f25, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  i18n:message
    org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f13 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.get(org.apache.taglibs.i18n.MessageTag.class);
    _jspx_th_i18n_005fmessage_005f13.setPageContext(_jspx_page_context);
    _jspx_th_i18n_005fmessage_005f13.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f25);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(269,40) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_i18n_005fmessage_005f13.setKey("datasource.test.wrong");
    int _jspx_eval_i18n_005fmessage_005f13 = _jspx_th_i18n_005fmessage_005f13.doStartTag();
    if (_jspx_eval_i18n_005fmessage_005f13 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_i18n_005fmessage_005f13 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_i18n_005fmessage_005f13.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_i18n_005fmessage_005f13.doInitBody();
      }
      do {
        out.write("!!!Bad");
        int evalDoAfterBody = _jspx_th_i18n_005fmessage_005f13.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_i18n_005fmessage_005f13 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.popBody();
      }
    }
    if (_jspx_th_i18n_005fmessage_005f13.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f13);
      return true;
    }
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f13);
    return false;
  }

  private boolean _jspx_meth_mvc_005ffragment_005f8(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005fformatter_005f0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:fragment
    org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f8 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
    _jspx_th_mvc_005ffragment_005f8.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005ffragment_005f8.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(282,0) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005ffragment_005f8.setName("outputRowButtonsBegin");
    int _jspx_eval_mvc_005ffragment_005f8 = _jspx_th_mvc_005ffragment_005f8.doStartTag();
    if (_jspx_eval_mvc_005ffragment_005f8 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_mvc_005ffragment_005f8 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_mvc_005ffragment_005f8.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_mvc_005ffragment_005f8.doInitBody();
      }
      do {
        out.write("\n");
        out.write("\t<tr>\n");
        out.write("\t\t<td align=\"center\" colspan=\"2\">\n");
        out.write("\n");
        int evalDoAfterBody = _jspx_th_mvc_005ffragment_005f8.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_mvc_005ffragment_005f8 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.popBody();
      }
    }
    if (_jspx_th_mvc_005ffragment_005f8.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f8);
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f8);
    return false;
  }

  private boolean _jspx_meth_mvc_005ffragment_005f9(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005fformatter_005f0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:fragment
    org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f9 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
    _jspx_th_mvc_005ffragment_005f9.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005ffragment_005f9.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(288,1) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005ffragment_005f9.setName("outputSubmitButton");
    int _jspx_eval_mvc_005ffragment_005f9 = _jspx_th_mvc_005ffragment_005f9.doStartTag();
    if (_jspx_eval_mvc_005ffragment_005f9 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_mvc_005ffragment_005f9 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_mvc_005ffragment_005f9.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_mvc_005ffragment_005f9.doInitBody();
      }
      do {
        out.write("\n");
        out.write("\t                        <input class=\"skn-button\" type=\"button\"\n");
        out.write("\t                               value='");
        if (_jspx_meth_i18n_005fmessage_005f14(_jspx_th_mvc_005ffragment_005f9, _jspx_page_context))
          return true;
        out.write("'\n");
        out.write("\t                               onclick=\"submitAjaxForm(document.getElementById('");
        if (_jspx_meth_panel_005fencode_005f29(_jspx_th_mvc_005ffragment_005f9, _jspx_page_context))
          return true;
        out.write("'))\">\n");
        out.write("\t");
        int evalDoAfterBody = _jspx_th_mvc_005ffragment_005f9.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_mvc_005ffragment_005f9 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.popBody();
      }
    }
    if (_jspx_th_mvc_005ffragment_005f9.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f9);
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f9);
    return false;
  }

  private boolean _jspx_meth_i18n_005fmessage_005f14(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragment_005f9, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  i18n:message
    org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f14 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.get(org.apache.taglibs.i18n.MessageTag.class);
    _jspx_th_i18n_005fmessage_005f14.setPageContext(_jspx_page_context);
    _jspx_th_i18n_005fmessage_005f14.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f9);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(290,39) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_i18n_005fmessage_005f14.setKey("datasource.saveChanges");
    int _jspx_eval_i18n_005fmessage_005f14 = _jspx_th_i18n_005fmessage_005f14.doStartTag();
    if (_jspx_th_i18n_005fmessage_005f14.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f14);
      return true;
    }
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f14);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f29(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragment_005f9, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f29 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f29.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f29.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f9);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(291,81) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f29.setName("formDS");
    int _jspx_eval_panel_005fencode_005f29 = _jspx_th_panel_005fencode_005f29.doStartTag();
    if (_jspx_th_panel_005fencode_005f29.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f29);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f29);
    return false;
  }

  private boolean _jspx_meth_mvc_005ffragment_005f10(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005fformatter_005f0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:fragment
    org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f10 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
    _jspx_th_mvc_005ffragment_005f10.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005ffragment_005f10.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(294,1) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005ffragment_005f10.setName("outputClear");
    int _jspx_eval_mvc_005ffragment_005f10 = _jspx_th_mvc_005ffragment_005f10.doStartTag();
    if (_jspx_eval_mvc_005ffragment_005f10 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_mvc_005ffragment_005f10 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_mvc_005ffragment_005f10.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_mvc_005ffragment_005f10.doInitBody();
      }
      do {
        out.write("\n");
        out.write("\t                        <input class=\"skn-button\" type=\"reset\" value='");
        if (_jspx_meth_i18n_005fmessage_005f15(_jspx_th_mvc_005ffragment_005f10, _jspx_page_context))
          return true;
        out.write("'>\n");
        out.write("\t");
        int evalDoAfterBody = _jspx_th_mvc_005ffragment_005f10.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_mvc_005ffragment_005f10 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.popBody();
      }
    }
    if (_jspx_th_mvc_005ffragment_005f10.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f10);
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f10);
    return false;
  }

  private boolean _jspx_meth_i18n_005fmessage_005f15(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragment_005f10, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  i18n:message
    org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f15 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.get(org.apache.taglibs.i18n.MessageTag.class);
    _jspx_th_i18n_005fmessage_005f15.setPageContext(_jspx_page_context);
    _jspx_th_i18n_005fmessage_005f15.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f10);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(295,71) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_i18n_005fmessage_005f15.setKey("datasource.clearfields");
    int _jspx_eval_i18n_005fmessage_005f15 = _jspx_th_i18n_005fmessage_005f15.doStartTag();
    if (_jspx_th_i18n_005fmessage_005f15.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f15);
      return true;
    }
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f15);
    return false;
  }

  private boolean _jspx_meth_mvc_005ffragment_005f11(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005fformatter_005f0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:fragment
    org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f11 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
    _jspx_th_mvc_005ffragment_005f11.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005ffragment_005f11.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(297,1) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005ffragment_005f11.setName("outputCancel");
    int _jspx_eval_mvc_005ffragment_005f11 = _jspx_th_mvc_005ffragment_005f11.doStartTag();
    if (_jspx_eval_mvc_005ffragment_005f11 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_mvc_005ffragment_005f11 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_mvc_005ffragment_005f11.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_mvc_005ffragment_005f11.doInitBody();
      }
      do {
        out.write("\n");
        out.write("\t                        <input class=\"skn-button_alt\" type=\"button\" id='");
        if (_jspx_meth_panel_005fencode_005f30(_jspx_th_mvc_005ffragment_005f11, _jspx_page_context))
          return true;
        out.write("' value='");
        if (_jspx_meth_i18n_005fmessage_005f16(_jspx_th_mvc_005ffragment_005f11, _jspx_page_context))
          return true;
        out.write("'\n");
        out.write("\t                               onclick=\"submitAjaxForm(document.getElementById('");
        if (_jspx_meth_panel_005fencode_005f31(_jspx_th_mvc_005ffragment_005f11, _jspx_page_context))
          return true;
        out.write("'))\" >\n");
        out.write("\n");
        out.write("\t");
        int evalDoAfterBody = _jspx_th_mvc_005ffragment_005f11.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_mvc_005ffragment_005f11 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.popBody();
      }
    }
    if (_jspx_th_mvc_005ffragment_005f11.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f11);
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f11);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f30(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragment_005f11, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f30 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f30.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f30.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f11);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(298,73) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f30.setName("DSCancelButton");
    int _jspx_eval_panel_005fencode_005f30 = _jspx_th_panel_005fencode_005f30.doStartTag();
    if (_jspx_th_panel_005fencode_005f30.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f30);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f30);
    return false;
  }

  private boolean _jspx_meth_i18n_005fmessage_005f16(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragment_005f11, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  i18n:message
    org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f16 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.get(org.apache.taglibs.i18n.MessageTag.class);
    _jspx_th_i18n_005fmessage_005f16.setPageContext(_jspx_page_context);
    _jspx_th_i18n_005fmessage_005f16.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f11);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(298,119) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_i18n_005fmessage_005f16.setKey("datasource.cancel");
    int _jspx_eval_i18n_005fmessage_005f16 = _jspx_th_i18n_005fmessage_005f16.doStartTag();
    if (_jspx_th_i18n_005fmessage_005f16.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f16);
      return true;
    }
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f16);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f31(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragment_005f11, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f31 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f31.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f31.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f11);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(299,81) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f31.setName("formCancelEdit");
    int _jspx_eval_panel_005fencode_005f31 = _jspx_th_panel_005fencode_005f31.doStartTag();
    if (_jspx_th_panel_005fencode_005f31.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f31);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f31);
    return false;
  }

  private boolean _jspx_meth_mvc_005ffragment_005f12(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005fformatter_005f0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:fragment
    org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f12 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
    _jspx_th_mvc_005ffragment_005f12.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005ffragment_005f12.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(303,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005ffragment_005f12.setName("outputTryButton");
    int _jspx_eval_mvc_005ffragment_005f12 = _jspx_th_mvc_005ffragment_005f12.doStartTag();
    if (_jspx_eval_mvc_005ffragment_005f12 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_mvc_005ffragment_005f12 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_mvc_005ffragment_005f12.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_mvc_005ffragment_005f12.doInitBody();
      }
      do {
        out.write("\n");
        out.write("        <input type=\"button\" value='");
        if (_jspx_meth_i18n_005fmessage_005f17(_jspx_th_mvc_005ffragment_005f12, _jspx_page_context))
          return true;
        out.write("' class=\"skn-button\" id='");
        if (_jspx_meth_panel_005fencode_005f32(_jspx_th_mvc_005ffragment_005f12, _jspx_page_context))
          return true;
        out.write("'\n");
        out.write("                onclick=\"\n");
        out.write("                document.getElementById('");
        if (_jspx_meth_panel_005fencode_005f33(_jspx_th_mvc_005ffragment_005f12, _jspx_page_context))
          return true;
        out.write("').value='true';\n");
        out.write("                submitAjaxForm(document.getElementById('");
        if (_jspx_meth_panel_005fencode_005f34(_jspx_th_mvc_005ffragment_005f12, _jspx_page_context))
          return true;
        out.write("'))\">\n");
        out.write("\n");
        out.write("        <input type=\"hidden\" name=\"checkingDS\" id=\"");
        if (_jspx_meth_panel_005fencode_005f35(_jspx_th_mvc_005ffragment_005f12, _jspx_page_context))
          return true;
        out.write("\" value=\"false\">\n");
        out.write("    ");
        int evalDoAfterBody = _jspx_th_mvc_005ffragment_005f12.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_mvc_005ffragment_005f12 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.popBody();
      }
    }
    if (_jspx_th_mvc_005ffragment_005f12.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f12);
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f12);
    return false;
  }

  private boolean _jspx_meth_i18n_005fmessage_005f17(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragment_005f12, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  i18n:message
    org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f17 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.get(org.apache.taglibs.i18n.MessageTag.class);
    _jspx_th_i18n_005fmessage_005f17.setPageContext(_jspx_page_context);
    _jspx_th_i18n_005fmessage_005f17.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f12);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(304,36) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_i18n_005fmessage_005f17.setKey("datasource.testQButton");
    int _jspx_eval_i18n_005fmessage_005f17 = _jspx_th_i18n_005fmessage_005f17.doStartTag();
    if (_jspx_th_i18n_005fmessage_005f17.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f17);
      return true;
    }
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f17);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f32(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragment_005f12, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f32 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f32.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f32.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f12);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(304,105) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f32.setName("DSTestButton");
    int _jspx_eval_panel_005fencode_005f32 = _jspx_th_panel_005fencode_005f32.doStartTag();
    if (_jspx_th_panel_005fencode_005f32.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f32);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f32);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f33(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragment_005f12, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f33 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f33.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f33.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f12);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(306,41) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f33.setName("isCheckingDS");
    int _jspx_eval_panel_005fencode_005f33 = _jspx_th_panel_005fencode_005f33.doStartTag();
    if (_jspx_th_panel_005fencode_005f33.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f33);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f33);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f34(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragment_005f12, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f34 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f34.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f34.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f12);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(307,56) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f34.setName("formDS");
    int _jspx_eval_panel_005fencode_005f34 = _jspx_th_panel_005fencode_005f34.doStartTag();
    if (_jspx_th_panel_005fencode_005f34.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f34);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f34);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f35(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragment_005f12, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f35 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f35.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f35.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f12);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(309,51) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f35.setName("isCheckingDS");
    int _jspx_eval_panel_005fencode_005f35 = _jspx_th_panel_005fencode_005f35.doStartTag();
    if (_jspx_th_panel_005fencode_005f35.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f35);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f35);
    return false;
  }

  private boolean _jspx_meth_mvc_005ffragment_005f13(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005fformatter_005f0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:fragment
    org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f13 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
    _jspx_th_mvc_005ffragment_005f13.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005ffragment_005f13.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(328,0) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005ffragment_005f13.setName("outputRowButtonsEnd");
    int _jspx_eval_mvc_005ffragment_005f13 = _jspx_th_mvc_005ffragment_005f13.doStartTag();
    if (_jspx_eval_mvc_005ffragment_005f13 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_mvc_005ffragment_005f13 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_mvc_005ffragment_005f13.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_mvc_005ffragment_005f13.doInitBody();
      }
      do {
        out.write("\n");
        out.write("\t\t</td>\n");
        out.write("\t</tr>\n");
        out.write("\n");
        int evalDoAfterBody = _jspx_th_mvc_005ffragment_005f13.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_mvc_005ffragment_005f13 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.popBody();
      }
    }
    if (_jspx_th_mvc_005ffragment_005f13.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f13);
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f13);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f36(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragment_005f14, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f36 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f36.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f36.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f14);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(340,21) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f36.setName("formDS");
    int _jspx_eval_panel_005fencode_005f36 = _jspx_th_panel_005fencode_005f36.doStartTag();
    if (_jspx_th_panel_005fencode_005f36.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f36);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f36);
    return false;
  }

  private boolean _jspx_meth_factory_005fformUrl_005f1(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragment_005f14, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  factory:formUrl
    org.jboss.dashboard.ui.taglib.factory.FormURLTag _jspx_th_factory_005fformUrl_005f1 = (org.jboss.dashboard.ui.taglib.factory.FormURLTag) _005fjspx_005ftagPool_005ffactory_005fformUrl_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.FormURLTag.class);
    _jspx_th_factory_005fformUrl_005f1.setPageContext(_jspx_page_context);
    _jspx_th_factory_005fformUrl_005f1.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f14);
    int _jspx_eval_factory_005fformUrl_005f1 = _jspx_th_factory_005fformUrl_005f1.doStartTag();
    if (_jspx_th_factory_005fformUrl_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005ffactory_005fformUrl_005fnobody.reuse(_jspx_th_factory_005fformUrl_005f1);
      return true;
    }
    _005fjspx_005ftagPool_005ffactory_005fformUrl_005fnobody.reuse(_jspx_th_factory_005fformUrl_005f1);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f37(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragment_005f14, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f37 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f37.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f37.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f14);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(342,48) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f37.setName("formCancelEdit");
    int _jspx_eval_panel_005fencode_005f37 = _jspx_th_panel_005fencode_005f37.doStartTag();
    if (_jspx_th_panel_005fencode_005f37.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f37);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f37);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f38(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragment_005f14, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f38 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f38.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f38.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f14);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(342,91) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f38.setName("formCancelEdit");
    int _jspx_eval_panel_005fencode_005f38 = _jspx_th_panel_005fencode_005f38.doStartTag();
    if (_jspx_th_panel_005fencode_005f38.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f38);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f38);
    return false;
  }

  private boolean _jspx_meth_factory_005fhandler_005f1(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragment_005f14, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  factory:handler
    org.jboss.dashboard.ui.taglib.factory.HandlerTag _jspx_th_factory_005fhandler_005f1 = (org.jboss.dashboard.ui.taglib.factory.HandlerTag) _005fjspx_005ftagPool_005ffactory_005fhandler_0026_005fbean_005faction_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.HandlerTag.class);
    _jspx_th_factory_005fhandler_005f1.setPageContext(_jspx_page_context);
    _jspx_th_factory_005fhandler_005f1.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f14);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(343,12) name = bean type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005fhandler_005f1.setBean("org.jboss.dashboard.ui.panel.dataSourceManagement.DataSourceManagementHandler");
    // /panels/dataSourceManagement/newDatasourceForm.jsp(343,12) name = action type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005fhandler_005f1.setAction("cancelEdit");
    int _jspx_eval_factory_005fhandler_005f1 = _jspx_th_factory_005fhandler_005f1.doStartTag();
    if (_jspx_th_factory_005fhandler_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005ffactory_005fhandler_0026_005fbean_005faction_005fnobody.reuse(_jspx_th_factory_005fhandler_005f1);
      return true;
    }
    _005fjspx_005ftagPool_005ffactory_005fhandler_0026_005fbean_005faction_005fnobody.reuse(_jspx_th_factory_005fhandler_005f1);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f39(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragment_005f14, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f39 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f39.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f39.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f14);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(346,21) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f39.setName("formCancelEdit");
    int _jspx_eval_panel_005fencode_005f39 = _jspx_th_panel_005fencode_005f39.doStartTag();
    if (_jspx_th_panel_005fencode_005f39.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f39);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f39);
    return false;
  }

  private boolean _jspx_meth_factory_005fformUrl_005f2(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragment_005f14, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  factory:formUrl
    org.jboss.dashboard.ui.taglib.factory.FormURLTag _jspx_th_factory_005fformUrl_005f2 = (org.jboss.dashboard.ui.taglib.factory.FormURLTag) _005fjspx_005ftagPool_005ffactory_005fformUrl_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.FormURLTag.class);
    _jspx_th_factory_005fformUrl_005f2.setPageContext(_jspx_page_context);
    _jspx_th_factory_005fformUrl_005f2.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f14);
    int _jspx_eval_factory_005fformUrl_005f2 = _jspx_th_factory_005fformUrl_005f2.doStartTag();
    if (_jspx_th_factory_005fformUrl_005f2.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005ffactory_005fformUrl_005fnobody.reuse(_jspx_th_factory_005fformUrl_005f2);
      return true;
    }
    _005fjspx_005ftagPool_005ffactory_005fformUrl_005fnobody.reuse(_jspx_th_factory_005fformUrl_005f2);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f40(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragment_005f14, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f40 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f40.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f40.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f14);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(348,48) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f40.setName("formInstrospect");
    int _jspx_eval_panel_005fencode_005f40 = _jspx_th_panel_005fencode_005f40.doStartTag();
    if (_jspx_th_panel_005fencode_005f40.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f40);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f40);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f41(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragment_005f14, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f41 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f41.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f41.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f14);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(348,92) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f41.setName("formInstrospect");
    int _jspx_eval_panel_005fencode_005f41 = _jspx_th_panel_005fencode_005f41.doStartTag();
    if (_jspx_th_panel_005fencode_005f41.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f41);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f41);
    return false;
  }

  private boolean _jspx_meth_factory_005fhandler_005f2(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragment_005f14, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  factory:handler
    org.jboss.dashboard.ui.taglib.factory.HandlerTag _jspx_th_factory_005fhandler_005f2 = (org.jboss.dashboard.ui.taglib.factory.HandlerTag) _005fjspx_005ftagPool_005ffactory_005fhandler_0026_005fbean_005faction_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.HandlerTag.class);
    _jspx_th_factory_005fhandler_005f2.setPageContext(_jspx_page_context);
    _jspx_th_factory_005fhandler_005f2.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f14);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(349,12) name = bean type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005fhandler_005f2.setBean("org.jboss.dashboard.ui.panel.dataSourceManagement.DataSourceManagementHandler");
    // /panels/dataSourceManagement/newDatasourceForm.jsp(349,12) name = action type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005fhandler_005f2.setAction("introspect");
    int _jspx_eval_factory_005fhandler_005f2 = _jspx_th_factory_005fhandler_005f2.doStartTag();
    if (_jspx_th_factory_005fhandler_005f2.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005ffactory_005fhandler_0026_005fbean_005faction_005fnobody.reuse(_jspx_th_factory_005fhandler_005f2);
      return true;
    }
    _005fjspx_005ftagPool_005ffactory_005fhandler_0026_005fbean_005faction_005fnobody.reuse(_jspx_th_factory_005fhandler_005f2);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f42(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragment_005f14, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f42 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f42.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f42.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f14);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(352,17) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f42.setName("formDSIntrospect");
    int _jspx_eval_panel_005fencode_005f42 = _jspx_th_panel_005fencode_005f42.doStartTag();
    if (_jspx_th_panel_005fencode_005f42.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f42);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f42);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f43(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f26, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f43 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f43.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f43.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f26);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(366,37) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f43.setName("nameTR");
    int _jspx_eval_panel_005fencode_005f43 = _jspx_th_panel_005fencode_005f43.doStartTag();
    if (_jspx_th_panel_005fencode_005f43.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f43);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f43);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f44(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f26, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f44 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f44.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f44.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f26);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(367,37) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f44.setName("jndiTR");
    int _jspx_eval_panel_005fencode_005f44 = _jspx_th_panel_005fencode_005f44.doStartTag();
    if (_jspx_th_panel_005fencode_005f44.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f44);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f44);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f45(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f26, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f45 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f45.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f45.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f26);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(368,37) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f45.setName("testQTR");
    int _jspx_eval_panel_005fencode_005f45 = _jspx_th_panel_005fencode_005f45.doStartTag();
    if (_jspx_th_panel_005fencode_005f45.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f45);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f45);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f46(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f26, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f46 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f46.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f46.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f26);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(369,37) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f46.setName("outputUrlTR");
    int _jspx_eval_panel_005fencode_005f46 = _jspx_th_panel_005fencode_005f46.doStartTag();
    if (_jspx_th_panel_005fencode_005f46.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f46);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f46);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f47(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f26, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f47 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f47.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f47.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f26);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(370,37) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f47.setName("outputDBTypeTR");
    int _jspx_eval_panel_005fencode_005f47 = _jspx_th_panel_005fencode_005f47.doStartTag();
    if (_jspx_th_panel_005fencode_005f47.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f47);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f47);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f48(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f26, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f48 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f48.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f48.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f26);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(371,37) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f48.setName("outputUserNameTR");
    int _jspx_eval_panel_005fencode_005f48 = _jspx_th_panel_005fencode_005f48.doStartTag();
    if (_jspx_th_panel_005fencode_005f48.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f48);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f48);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f49(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f26, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f49 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f49.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f49.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f26);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(372,37) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f49.setName("outputUserPwdTR");
    int _jspx_eval_panel_005fencode_005f49 = _jspx_th_panel_005fencode_005f49.doStartTag();
    if (_jspx_th_panel_005fencode_005f49.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f49);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f49);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f50(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f26, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f50 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f50.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f50.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f26);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(376,37) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f50.setName("nameTR");
    int _jspx_eval_panel_005fencode_005f50 = _jspx_th_panel_005fencode_005f50.doStartTag();
    if (_jspx_th_panel_005fencode_005f50.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f50);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f50);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f51(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f26, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f51 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f51.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f51.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f26);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(377,37) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f51.setName("outputUrlTR");
    int _jspx_eval_panel_005fencode_005f51 = _jspx_th_panel_005fencode_005f51.doStartTag();
    if (_jspx_th_panel_005fencode_005f51.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f51);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f51);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f52(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f26, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f52 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f52.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f52.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f26);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(378,37) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f52.setName("outputDBTypeTR");
    int _jspx_eval_panel_005fencode_005f52 = _jspx_th_panel_005fencode_005f52.doStartTag();
    if (_jspx_th_panel_005fencode_005f52.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f52);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f52);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f53(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f26, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f53 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f53.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f53.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f26);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(379,37) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f53.setName("outputUserNameTR");
    int _jspx_eval_panel_005fencode_005f53 = _jspx_th_panel_005fencode_005f53.doStartTag();
    if (_jspx_th_panel_005fencode_005f53.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f53);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f53);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f54(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f26, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f54 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f54.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f54.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f26);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(380,37) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f54.setName("outputUserPwdTR");
    int _jspx_eval_panel_005fencode_005f54 = _jspx_th_panel_005fencode_005f54.doStartTag();
    if (_jspx_th_panel_005fencode_005f54.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f54);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f54);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f55(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f26, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f55 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f55.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f55.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f26);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(381,37) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f55.setName("jndiTR");
    int _jspx_eval_panel_005fencode_005f55 = _jspx_th_panel_005fencode_005f55.doStartTag();
    if (_jspx_th_panel_005fencode_005f55.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f55);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f55);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f56(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f26, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f56 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f56.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f56.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f26);
    // /panels/dataSourceManagement/newDatasourceForm.jsp(382,37) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f56.setName("testQTR");
    int _jspx_eval_panel_005fencode_005f56 = _jspx_th_panel_005fencode_005f56.doStartTag();
    if (_jspx_th_panel_005fencode_005f56.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f56);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f56);
    return false;
  }
}
