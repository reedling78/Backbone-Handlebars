this["Templates"] = this["Templates"] || {};

this["Templates"]["templates/modalView.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "\n<div class=\"modal fade\">\n	<div class=\"modal-dialog\">\n		<div class=\"modal-content\">\n			<div class=\"modal-header\">\n				<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n				<h4 class=\"modal-title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h4>\n			</div>\n			<div class=\"modal-body\">test</div>\n		</div>\n	</div>\n</div>";
  return buffer;
  });

this["Templates"]["templates/viewPharm.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container\">\n	<h1>Pharmacy View</h1>\n\n	<div data-module=\"GoogleMap\"\n		lat=\"38.2581176\" \n		long=\"-85.757092\"\n		style=\"height:200px;\">\n    </div>\n\n</div>";
  });

this["Templates"]["templates/viewPlans.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container\">\n	<h1>Plan View</h1>\n</div>";
  });

this["Templates"]["templates/viewRX.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container\">\n	<h1>RX View</h1>\n	<a href=\"#\" data-action=\"OpenFormModal\">Form Modal</a><br />\n	<a href=\"#\" data-action=\"OpenTextModal\">Text Modal</a>\n</div>\n";
  });