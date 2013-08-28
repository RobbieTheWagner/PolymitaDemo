package org.apache.jsp.layouts.Default_005ftemplate_005fwith_005fsliding_005fmenu;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import org.jboss.dashboard.ui.SessionManager;
import org.jboss.dashboard.workspace.*;
import org.jboss.dashboard.security.WorkspacePermission;
import java.security.AllPermission;
import java.security.Permission;
import java.util.Locale;
import org.jboss.dashboard.LocaleManager;
import org.jboss.dashboard.ui.NavigationManager;
import org.jboss.dashboard.factory.Factory;

public final class slider_005fmenu_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List _jspx_dependants;

  static {
    _jspx_dependants = new java.util.ArrayList(1);
    _jspx_dependants.add("/common/global.jsp");
  }

  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fi18n_005fbundle_0026_005flocale_005fid_005fbaseName_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public Object getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _005fjspx_005ftagPool_005fi18n_005fbundle_0026_005flocale_005fid_005fbaseName_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
  }

  public void _jspDestroy() {
    _005fjspx_005ftagPool_005fi18n_005fbundle_0026_005flocale_005fid_005fbaseName_005fnobody.release();
    _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.release();
    _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.release();
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

    LocaleManager localeManager = LocaleManager.lookup();
    NavigationManager navigationManager = NavigationManager.lookup();
    Section currentSection = navigationManager.getCurrentSection();
    Workspace currentWorkspace = navigationManager.getCurrentWorkspace();
    Locale currentLocale = localeManager.getCurrentLocale();
    boolean adminMode = navigationManager.userIsAdminInCurrentWorkspace();

      out.write('\n');
      //  i18n:bundle
      java.util.ResourceBundle bundle = null;
      org.apache.taglibs.i18n.BundleTag _jspx_th_i18n_005fbundle_005f0 = (org.apache.taglibs.i18n.BundleTag) _005fjspx_005ftagPool_005fi18n_005fbundle_0026_005flocale_005fid_005fbaseName_005fnobody.get(org.apache.taglibs.i18n.BundleTag.class);
      _jspx_th_i18n_005fbundle_005f0.setPageContext(_jspx_page_context);
      _jspx_th_i18n_005fbundle_005f0.setParent(null);
      // /common/global.jsp(40,0) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_i18n_005fbundle_005f0.setId("bundle");
      // /common/global.jsp(40,0) name = baseName type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_i18n_005fbundle_005f0.setBaseName("org.jboss.dashboard.ui.messages");
      // /common/global.jsp(40,0) name = locale type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_i18n_005fbundle_005f0.setLocale(localeManager.getCurrentLocale());
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
      out.write("\n");
      out.write("\n");
      out.write("<script language=\"JavaScript\" type=\"text/javascript\">\n");
      out.write("    <!--\n");
      out.write("    var slideSideMenu = new Object();\n");
      out.write("    slideSideMenu.minWidth = 0;\n");
      out.write("    slideSideMenu.maxWidth = 260;\n");
      out.write("    slideSideMenu.increment = 30;\n");
      out.write("    slideSideMenu.speed = 5;\n");
      out.write("    slideSideMenu.divStyleToMove = null;\n");
      out.write("    slideSideMenu.cookieName = \"region_left_web_2_0_cookie\";\n");
      out.write("    slideSideMenu.getCookieVal = function (offset) {\n");
      out.write("        var endstr = document.cookie.indexOf (\";\", offset);\n");
      out.write("        if (endstr == -1)\n");
      out.write("            endstr = document.cookie.length;\n");
      out.write("        return unescape(document.cookie.substring(offset, endstr));\n");
      out.write("    }\n");
      out.write("    slideSideMenu.GetCookie = function (name)  {\n");
      out.write("        var arg = name + \"=\";\n");
      out.write("        var alen = arg.length;\n");
      out.write("        var clen = document.cookie.length;\n");
      out.write("        var i = 0;\n");
      out.write("        while (i < clen)\n");
      out.write("        {\n");
      out.write("            var j = i + alen;\n");
      out.write("            if (document.cookie.substring(i, j) == arg)\n");
      out.write("                return this.getCookieVal (j);\n");
      out.write("            i = document.cookie.indexOf(\" \", i) + 1;\n");
      out.write("            if (i == 0) break;\n");
      out.write("        }\n");
      out.write("        return null;\n");
      out.write("    }\n");
      out.write("\n");
      out.write("    slideSideMenu.SetCookie = function (name, value) {\n");
      out.write("        var argv = this.SetCookie.arguments;\n");
      out.write("        var argc = this.SetCookie.arguments.length;\n");
      out.write("        var expires = (argc > 2) ? argv[2] : null;\n");
      out.write("        var path = (argc > 3) ? argv[3] : null;\n");
      out.write("        var domain = (argc > 4) ? argv[4] : null;\n");
      out.write("        var secure = (argc > 5) ? argv[5] : false;\n");
      out.write("        document.cookie = name + \"=\" + escape (value) +\n");
      out.write("                ((expires == null) ? \"\" : (\"; expires=\" + expires.toGMTString())) +\n");
      out.write("                ((path == null) ? \"; path=/\" : (\"; path=\" + path)) +\n");
      out.write("                ((domain == null) ? \"\" : (\"; domain=\" + domain)) +\n");
      out.write("                ((secure == true) ? \"; secure\" : \"\");\n");
      out.write("    }\n");
      out.write("\n");
      out.write("    slideSideMenu.EvaluateInitialStatus = function () {\n");
      out.write("        if ( (IE && document.readyState != 'complete') || !document.getElementById(\"region_left_web_2_0\")) {\n");
      out.write("            setTimeout(\"slideSideMenu.EvaluateInitialStatus()\",100);\n");
      out.write("        } else {\n");
      out.write("            this.divStyleToMove = document.getElementById(\"region_left_web_2_0\").style;\n");
      out.write("            //this.divStyleToMove.width = this.maxWidth+'px';\n");
      out.write("            var state = this.GetCookie(this.cookieName) ;\n");
      out.write("            state = state == null ? 1 : state;\n");
      out.write("            if( state == 1 ){\n");
      out.write("                this.openIt( );\n");
      out.write("            } else {\n");
      out.write("                this.SetCookie(this.cookieName, 0);\n");
      out.write("                this.divStyleToMove.width = this.minWidth+'px';\n");
      out.write("            }\n");
      out.write("        }\n");
      out.write("    }\n");
      out.write("\n");
      out.write("    slideSideMenu.start = function() {\n");
      out.write("        var state = this.GetCookie(this.cookieName) ;\n");
      out.write("        state = state == null ? 0 : state;\n");
      out.write("        if (state == 1) this.slide(null, true);\n");
      out.write("        else this.slide(null, false);\n");
      out.write("    }\n");
      out.write("\n");
      out.write("    slideSideMenu.slide = function( pos , back){\n");
      out.write("        this.divStyleToMove.overflow = 'hidden';\n");
      out.write("        this.divStyleToMove.display = 'block';\n");
      out.write("        pos = (pos != null) ? pos : (back ? this.maxWidth: this.minWidth);\n");
      out.write("        if(pos < this.minWidth) pos = this.minWidth;\n");
      out.write("        if(pos > this.maxWidth) pos = this.maxWidth;\n");
      out.write("        this.divStyleToMove.width =  pos + \"px\";\n");
      out.write("        //alert(\"Move \"+(back?\"back\":\"\")+\" div to pos \"+pos);\n");
      out.write("        var end = back ? (pos<=this.minWidth) : (pos>=this.maxWidth);\n");
      out.write("\n");
      out.write("        if ( !end ){\n");
      out.write("            var totalIncrement = back ? (pos-this.increment):(pos+this.increment);\n");
      out.write("            setTimeout(\"slideSideMenu.slide(\"+totalIncrement+\",\"+back+\")\", this.speed);\n");
      out.write("        } else {\n");
      out.write("            this.divStyleToMove.width =  (!back ? this.maxWidth: this.minWidth) + \"px\";\n");
      out.write("            this.divStyleToMove.overflow = back ? 'hidden':'visible';\n");
      out.write("            this.divStyleToMove.display = back ? 'none':'block';\n");
      out.write("            this.SetCookie(this.cookieName, back ? 0:1);\n");
      out.write("        }\n");
      out.write("    }\n");
      out.write("\n");
      out.write("    slideSideMenu.openIt = function(){\n");
      out.write("        this.SetCookie(this.cookieName, 1);\n");
      out.write("        this.divStyleToMove.width = this.maxWidth + \"px\";\n");
      out.write("    }\n");
      out.write("\n");
      out.write("    setTimeout (\"slideSideMenu.EvaluateInitialStatus()\",100);\n");
      out.write("\n");
      out.write("    //-->\n");
      out.write("</script>\n");
      out.write("\n");
      out.write("<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"Table_Top\">\n");
      out.write("    <tr>\n");
      out.write("        <td class=\"Bg_Top-left\" align=\"left\">\n");
      out.write("            <div id=\"General_Logo\">");
      if (_jspx_meth_panel_005fregion_005f0(_jspx_page_context))
        return;
      out.write("</div>\n");
      out.write("        </td>\n");
      out.write("        <td class=\"Bg_Top-right\">\n");
      out.write("            <table align=\"right\">\n");
      out.write("                <tr>\n");
      out.write("                    <td><div id=\"Header_Right-top\">");
      if (_jspx_meth_panel_005fregion_005f1(_jspx_page_context))
        return;
      out.write("</div></td>\n");
      out.write("                </tr>\n");
      out.write("                <tr>\n");
      out.write("                    <td><div id=\"Header_Right-bottom\">");
      if (_jspx_meth_panel_005fregion_005f2(_jspx_page_context))
        return;
      out.write("</div></td>\n");
      out.write("                </tr>\n");
      out.write("            </table>\n");
      out.write("\n");
      out.write("\n");
      out.write("        </td>\n");
      out.write("    </tr>\n");
      out.write("</table>\n");
      out.write("<table width=\"99%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n");
      out.write("    <tr style=\"height:10px; vertical-align:top;\">\n");
      out.write("        <td colspan=\"3\" style=\" height:10px;\"></td>\n");
      out.write("    </tr>\n");
      out.write("    <tr>\n");
      out.write("        <td style=\"vertical-align:top; text-align:left; width:1%;\">\n");
      out.write("            ");

                String display = "block";
                Cookie[] cookies = request.getCookies();
                if(cookies!=null)
                    for (int i = 0; i < cookies.length; i++) {
                        Cookie cookie = cookies[i];
                        if(cookie!=null && "region_left_web_2_0_cookie".equals(cookie.getName())) {
                            if("0".equals(cookie.getValue())){
                                display = "none";
                            }
                        }
                    }
            
      out.write("\n");
      out.write("            <div id=\"region_left_web_2_0\" style=\"margin:0px; padding:0px; width: 260px; display: ");
      out.print(display);
      out.write("\">\n");
      out.write("                <table cellpadding=\"0\" cellspacing=\"0\" style=\"width:100%; border:none; margin:0px; padding:0px;\">\n");
      out.write("                    <tr>\n");
      out.write("                        <td></td>\n");
      out.write("                    </tr>\n");
      out.write("                    <tr>\n");
      out.write("                        <td>");
      if (_jspx_meth_panel_005fregion_005f3(_jspx_page_context))
        return;
      out.write("</td>\n");
      out.write("                    </tr>\n");
      out.write("                    <tr>\n");
      out.write("                        <td></td>\n");
      out.write("                    </tr>\n");
      out.write("                </table>\n");
      out.write("                <table cellpadding=\"0\" cellspacing=\"0\"  style=\"width:100%; border:none; margin-top:5px; padding:0px\">\n");
      out.write("                    <tr>\n");
      out.write("                        <td></td>\n");
      out.write("                    </tr>\n");
      out.write("                    <tr>\n");
      out.write("                        <td>");
      if (_jspx_meth_panel_005fregion_005f4(_jspx_page_context))
        return;
      out.write("</td>\n");
      out.write("                    </tr>\n");
      out.write("                    <tr>\n");
      out.write("                        <td></td>\n");
      out.write("                    </tr>\n");
      out.write("                </table>\n");
      out.write("            </div>\n");
      out.write("        </td>\n");
      out.write("        <td style=\"width:10px; vertical-align:top; padding-top:25px;\">\n");
      out.write("            <img onclick=\"slideSideMenu.start();return false;\" src=\"");
      if (_jspx_meth_static_005fimage_005f0(_jspx_page_context))
        return;
      out.write("\" style=\"width:10px; height:40px; border:none; padding:1px; cursor:pointer\" />\n");
      out.write("        </td>\n");
      out.write("        <td style=\"vertical-align:top; text-align:left; width:99%; padding-left: 15px; border-left: 1px dotted gray; height: 800px;\">\n");
      out.write("            <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\">\n");
      out.write("                <tr><td class=\"contentColumn\" style=\"vertical-align:top;\">");
      if (_jspx_meth_panel_005fregion_005f5(_jspx_page_context))
        return;
      out.write("</td></tr>\n");
      out.write("                <tr><td class=\"contentRow\" \t  style=\"vertical-align:top;\">");
      if (_jspx_meth_panel_005fregion_005f6(_jspx_page_context))
        return;
      out.write("</td></tr>\n");
      out.write("                <tr><td class=\"contentTab\" \t  style=\"vertical-align:top;\">");
      if (_jspx_meth_panel_005fregion_005f7(_jspx_page_context))
        return;
      out.write("</td></tr>\n");
      out.write("                <tr><td class=\"contentColumn\" style=\"vertical-align:top;\">");
      if (_jspx_meth_panel_005fregion_005f8(_jspx_page_context))
        return;
      out.write("</td></tr>\n");
      out.write("                <tr><td class=\"contentRow\" \t  style=\"vertical-align:top;\">");
      if (_jspx_meth_panel_005fregion_005f9(_jspx_page_context))
        return;
      out.write("</td></tr>\n");
      out.write("                <tr><td class=\"contentTab\" \t  style=\"vertical-align:top;\">");
      if (_jspx_meth_panel_005fregion_005f10(_jspx_page_context))
        return;
      out.write("</td></tr>\n");
      out.write("            </table>\n");
      out.write("\n");
      out.write("            <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\">\n");
      out.write("                <tr>\n");
      out.write("                    <td style=\"vertical-align:top;\" class=\"contentColumn\">");
      if (_jspx_meth_panel_005fregion_005f11(_jspx_page_context))
        return;
      out.write("</td>\n");
      out.write("                    <td style=\"vertical-align:top;\" class=\"contentColumn\">");
      if (_jspx_meth_panel_005fregion_005f12(_jspx_page_context))
        return;
      out.write("</td>\n");
      out.write("                </tr>\n");
      out.write("            </table>\n");
      out.write("            <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\">\n");
      out.write("                <tr>\n");
      out.write("                    <td style=\"vertical-align:top;\" class=\"contentColumn\">");
      if (_jspx_meth_panel_005fregion_005f13(_jspx_page_context))
        return;
      out.write("</td>\n");
      out.write("                    <td style=\"vertical-align:top;\" class=\"contentColumn\">");
      if (_jspx_meth_panel_005fregion_005f14(_jspx_page_context))
        return;
      out.write("</td>\n");
      out.write("                    <td style=\"vertical-align:top;\" class=\"contentColumn\">");
      if (_jspx_meth_panel_005fregion_005f15(_jspx_page_context))
        return;
      out.write("</td>\n");
      out.write("                </tr>\n");
      out.write("            </table>\n");
      out.write("        </td>\n");
      out.write("    </tr>\n");
      out.write("</table>\n");
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

  private boolean _jspx_meth_panel_005fregion_005f0(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:region
    org.jboss.dashboard.ui.taglib.RegionTag _jspx_th_panel_005fregion_005f0 = (org.jboss.dashboard.ui.taglib.RegionTag) _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.get(org.jboss.dashboard.ui.taglib.RegionTag.class);
    _jspx_th_panel_005fregion_005f0.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fregion_005f0.setParent(null);
    // /layouts/Default_template_with_sliding_menu/slider_menu.jsp(122,35) name = region type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fregion_005f0.setRegion("General_Logo");
    int _jspx_eval_panel_005fregion_005f0 = _jspx_th_panel_005fregion_005f0.doStartTag();
    if (_jspx_th_panel_005fregion_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.reuse(_jspx_th_panel_005fregion_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.reuse(_jspx_th_panel_005fregion_005f0);
    return false;
  }

  private boolean _jspx_meth_panel_005fregion_005f1(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:region
    org.jboss.dashboard.ui.taglib.RegionTag _jspx_th_panel_005fregion_005f1 = (org.jboss.dashboard.ui.taglib.RegionTag) _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.get(org.jboss.dashboard.ui.taglib.RegionTag.class);
    _jspx_th_panel_005fregion_005f1.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fregion_005f1.setParent(null);
    // /layouts/Default_template_with_sliding_menu/slider_menu.jsp(127,51) name = region type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fregion_005f1.setRegion("Header_Right-top");
    int _jspx_eval_panel_005fregion_005f1 = _jspx_th_panel_005fregion_005f1.doStartTag();
    if (_jspx_th_panel_005fregion_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.reuse(_jspx_th_panel_005fregion_005f1);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.reuse(_jspx_th_panel_005fregion_005f1);
    return false;
  }

  private boolean _jspx_meth_panel_005fregion_005f2(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:region
    org.jboss.dashboard.ui.taglib.RegionTag _jspx_th_panel_005fregion_005f2 = (org.jboss.dashboard.ui.taglib.RegionTag) _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.get(org.jboss.dashboard.ui.taglib.RegionTag.class);
    _jspx_th_panel_005fregion_005f2.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fregion_005f2.setParent(null);
    // /layouts/Default_template_with_sliding_menu/slider_menu.jsp(130,54) name = region type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fregion_005f2.setRegion("Header_Right-bottom");
    int _jspx_eval_panel_005fregion_005f2 = _jspx_th_panel_005fregion_005f2.doStartTag();
    if (_jspx_th_panel_005fregion_005f2.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.reuse(_jspx_th_panel_005fregion_005f2);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.reuse(_jspx_th_panel_005fregion_005f2);
    return false;
  }

  private boolean _jspx_meth_panel_005fregion_005f3(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:region
    org.jboss.dashboard.ui.taglib.RegionTag _jspx_th_panel_005fregion_005f3 = (org.jboss.dashboard.ui.taglib.RegionTag) _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.get(org.jboss.dashboard.ui.taglib.RegionTag.class);
    _jspx_th_panel_005fregion_005f3.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fregion_005f3.setParent(null);
    // /layouts/Default_template_with_sliding_menu/slider_menu.jsp(163,28) name = region type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fregion_005f3.setRegion("left_top");
    int _jspx_eval_panel_005fregion_005f3 = _jspx_th_panel_005fregion_005f3.doStartTag();
    if (_jspx_th_panel_005fregion_005f3.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.reuse(_jspx_th_panel_005fregion_005f3);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.reuse(_jspx_th_panel_005fregion_005f3);
    return false;
  }

  private boolean _jspx_meth_panel_005fregion_005f4(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:region
    org.jboss.dashboard.ui.taglib.RegionTag _jspx_th_panel_005fregion_005f4 = (org.jboss.dashboard.ui.taglib.RegionTag) _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.get(org.jboss.dashboard.ui.taglib.RegionTag.class);
    _jspx_th_panel_005fregion_005f4.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fregion_005f4.setParent(null);
    // /layouts/Default_template_with_sliding_menu/slider_menu.jsp(174,28) name = region type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fregion_005f4.setRegion("left_bottom");
    int _jspx_eval_panel_005fregion_005f4 = _jspx_th_panel_005fregion_005f4.doStartTag();
    if (_jspx_th_panel_005fregion_005f4.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.reuse(_jspx_th_panel_005fregion_005f4);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.reuse(_jspx_th_panel_005fregion_005f4);
    return false;
  }

  private boolean _jspx_meth_static_005fimage_005f0(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  static:image
    org.jboss.dashboard.ui.taglib.resource.ImageResolverTag _jspx_th_static_005fimage_005f0 = (org.jboss.dashboard.ui.taglib.resource.ImageResolverTag) _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.get(org.jboss.dashboard.ui.taglib.resource.ImageResolverTag.class);
    _jspx_th_static_005fimage_005f0.setPageContext(_jspx_page_context);
    _jspx_th_static_005fimage_005f0.setParent(null);
    // /layouts/Default_template_with_sliding_menu/slider_menu.jsp(183,68) name = relativePath type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_static_005fimage_005f0.setRelativePath("general/resize.gif");
    int _jspx_eval_static_005fimage_005f0 = _jspx_th_static_005fimage_005f0.doStartTag();
    if (_jspx_th_static_005fimage_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.reuse(_jspx_th_static_005fimage_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.reuse(_jspx_th_static_005fimage_005f0);
    return false;
  }

  private boolean _jspx_meth_panel_005fregion_005f5(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:region
    org.jboss.dashboard.ui.taglib.RegionTag _jspx_th_panel_005fregion_005f5 = (org.jboss.dashboard.ui.taglib.RegionTag) _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.get(org.jboss.dashboard.ui.taglib.RegionTag.class);
    _jspx_th_panel_005fregion_005f5.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fregion_005f5.setParent(null);
    // /layouts/Default_template_with_sliding_menu/slider_menu.jsp(187,74) name = region type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fregion_005f5.setRegion("center_1");
    int _jspx_eval_panel_005fregion_005f5 = _jspx_th_panel_005fregion_005f5.doStartTag();
    if (_jspx_th_panel_005fregion_005f5.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.reuse(_jspx_th_panel_005fregion_005f5);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.reuse(_jspx_th_panel_005fregion_005f5);
    return false;
  }

  private boolean _jspx_meth_panel_005fregion_005f6(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:region
    org.jboss.dashboard.ui.taglib.RegionTag _jspx_th_panel_005fregion_005f6 = (org.jboss.dashboard.ui.taglib.RegionTag) _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.get(org.jboss.dashboard.ui.taglib.RegionTag.class);
    _jspx_th_panel_005fregion_005f6.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fregion_005f6.setParent(null);
    // /layouts/Default_template_with_sliding_menu/slider_menu.jsp(188,74) name = region type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fregion_005f6.setRegion("center_2");
    int _jspx_eval_panel_005fregion_005f6 = _jspx_th_panel_005fregion_005f6.doStartTag();
    if (_jspx_th_panel_005fregion_005f6.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.reuse(_jspx_th_panel_005fregion_005f6);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.reuse(_jspx_th_panel_005fregion_005f6);
    return false;
  }

  private boolean _jspx_meth_panel_005fregion_005f7(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:region
    org.jboss.dashboard.ui.taglib.RegionTag _jspx_th_panel_005fregion_005f7 = (org.jboss.dashboard.ui.taglib.RegionTag) _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.get(org.jboss.dashboard.ui.taglib.RegionTag.class);
    _jspx_th_panel_005fregion_005f7.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fregion_005f7.setParent(null);
    // /layouts/Default_template_with_sliding_menu/slider_menu.jsp(189,74) name = region type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fregion_005f7.setRegion("center_3");
    int _jspx_eval_panel_005fregion_005f7 = _jspx_th_panel_005fregion_005f7.doStartTag();
    if (_jspx_th_panel_005fregion_005f7.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.reuse(_jspx_th_panel_005fregion_005f7);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.reuse(_jspx_th_panel_005fregion_005f7);
    return false;
  }

  private boolean _jspx_meth_panel_005fregion_005f8(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:region
    org.jboss.dashboard.ui.taglib.RegionTag _jspx_th_panel_005fregion_005f8 = (org.jboss.dashboard.ui.taglib.RegionTag) _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.get(org.jboss.dashboard.ui.taglib.RegionTag.class);
    _jspx_th_panel_005fregion_005f8.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fregion_005f8.setParent(null);
    // /layouts/Default_template_with_sliding_menu/slider_menu.jsp(190,74) name = region type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fregion_005f8.setRegion("center_4");
    int _jspx_eval_panel_005fregion_005f8 = _jspx_th_panel_005fregion_005f8.doStartTag();
    if (_jspx_th_panel_005fregion_005f8.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.reuse(_jspx_th_panel_005fregion_005f8);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.reuse(_jspx_th_panel_005fregion_005f8);
    return false;
  }

  private boolean _jspx_meth_panel_005fregion_005f9(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:region
    org.jboss.dashboard.ui.taglib.RegionTag _jspx_th_panel_005fregion_005f9 = (org.jboss.dashboard.ui.taglib.RegionTag) _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.get(org.jboss.dashboard.ui.taglib.RegionTag.class);
    _jspx_th_panel_005fregion_005f9.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fregion_005f9.setParent(null);
    // /layouts/Default_template_with_sliding_menu/slider_menu.jsp(191,74) name = region type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fregion_005f9.setRegion("center_5");
    int _jspx_eval_panel_005fregion_005f9 = _jspx_th_panel_005fregion_005f9.doStartTag();
    if (_jspx_th_panel_005fregion_005f9.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.reuse(_jspx_th_panel_005fregion_005f9);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.reuse(_jspx_th_panel_005fregion_005f9);
    return false;
  }

  private boolean _jspx_meth_panel_005fregion_005f10(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:region
    org.jboss.dashboard.ui.taglib.RegionTag _jspx_th_panel_005fregion_005f10 = (org.jboss.dashboard.ui.taglib.RegionTag) _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.get(org.jboss.dashboard.ui.taglib.RegionTag.class);
    _jspx_th_panel_005fregion_005f10.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fregion_005f10.setParent(null);
    // /layouts/Default_template_with_sliding_menu/slider_menu.jsp(192,74) name = region type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fregion_005f10.setRegion("center_6");
    int _jspx_eval_panel_005fregion_005f10 = _jspx_th_panel_005fregion_005f10.doStartTag();
    if (_jspx_th_panel_005fregion_005f10.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.reuse(_jspx_th_panel_005fregion_005f10);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.reuse(_jspx_th_panel_005fregion_005f10);
    return false;
  }

  private boolean _jspx_meth_panel_005fregion_005f11(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:region
    org.jboss.dashboard.ui.taglib.RegionTag _jspx_th_panel_005fregion_005f11 = (org.jboss.dashboard.ui.taglib.RegionTag) _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.get(org.jboss.dashboard.ui.taglib.RegionTag.class);
    _jspx_th_panel_005fregion_005f11.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fregion_005f11.setParent(null);
    // /layouts/Default_template_with_sliding_menu/slider_menu.jsp(197,74) name = region type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fregion_005f11.setRegion("col2_1");
    int _jspx_eval_panel_005fregion_005f11 = _jspx_th_panel_005fregion_005f11.doStartTag();
    if (_jspx_th_panel_005fregion_005f11.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.reuse(_jspx_th_panel_005fregion_005f11);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.reuse(_jspx_th_panel_005fregion_005f11);
    return false;
  }

  private boolean _jspx_meth_panel_005fregion_005f12(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:region
    org.jboss.dashboard.ui.taglib.RegionTag _jspx_th_panel_005fregion_005f12 = (org.jboss.dashboard.ui.taglib.RegionTag) _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.get(org.jboss.dashboard.ui.taglib.RegionTag.class);
    _jspx_th_panel_005fregion_005f12.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fregion_005f12.setParent(null);
    // /layouts/Default_template_with_sliding_menu/slider_menu.jsp(198,74) name = region type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fregion_005f12.setRegion("col2_2");
    int _jspx_eval_panel_005fregion_005f12 = _jspx_th_panel_005fregion_005f12.doStartTag();
    if (_jspx_th_panel_005fregion_005f12.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.reuse(_jspx_th_panel_005fregion_005f12);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.reuse(_jspx_th_panel_005fregion_005f12);
    return false;
  }

  private boolean _jspx_meth_panel_005fregion_005f13(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:region
    org.jboss.dashboard.ui.taglib.RegionTag _jspx_th_panel_005fregion_005f13 = (org.jboss.dashboard.ui.taglib.RegionTag) _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.get(org.jboss.dashboard.ui.taglib.RegionTag.class);
    _jspx_th_panel_005fregion_005f13.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fregion_005f13.setParent(null);
    // /layouts/Default_template_with_sliding_menu/slider_menu.jsp(203,74) name = region type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fregion_005f13.setRegion("col3_1");
    int _jspx_eval_panel_005fregion_005f13 = _jspx_th_panel_005fregion_005f13.doStartTag();
    if (_jspx_th_panel_005fregion_005f13.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.reuse(_jspx_th_panel_005fregion_005f13);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.reuse(_jspx_th_panel_005fregion_005f13);
    return false;
  }

  private boolean _jspx_meth_panel_005fregion_005f14(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:region
    org.jboss.dashboard.ui.taglib.RegionTag _jspx_th_panel_005fregion_005f14 = (org.jboss.dashboard.ui.taglib.RegionTag) _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.get(org.jboss.dashboard.ui.taglib.RegionTag.class);
    _jspx_th_panel_005fregion_005f14.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fregion_005f14.setParent(null);
    // /layouts/Default_template_with_sliding_menu/slider_menu.jsp(204,74) name = region type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fregion_005f14.setRegion("col3_2");
    int _jspx_eval_panel_005fregion_005f14 = _jspx_th_panel_005fregion_005f14.doStartTag();
    if (_jspx_th_panel_005fregion_005f14.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.reuse(_jspx_th_panel_005fregion_005f14);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.reuse(_jspx_th_panel_005fregion_005f14);
    return false;
  }

  private boolean _jspx_meth_panel_005fregion_005f15(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:region
    org.jboss.dashboard.ui.taglib.RegionTag _jspx_th_panel_005fregion_005f15 = (org.jboss.dashboard.ui.taglib.RegionTag) _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.get(org.jboss.dashboard.ui.taglib.RegionTag.class);
    _jspx_th_panel_005fregion_005f15.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fregion_005f15.setParent(null);
    // /layouts/Default_template_with_sliding_menu/slider_menu.jsp(205,74) name = region type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fregion_005f15.setRegion("col3_3");
    int _jspx_eval_panel_005fregion_005f15 = _jspx_th_panel_005fregion_005f15.doStartTag();
    if (_jspx_th_panel_005fregion_005f15.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.reuse(_jspx_th_panel_005fregion_005f15);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fregion_0026_005fregion_005fnobody.reuse(_jspx_th_panel_005fregion_005f15);
    return false;
  }
}
