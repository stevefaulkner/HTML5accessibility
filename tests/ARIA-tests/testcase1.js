$(document).ready(function() {
   var widgetRoles = {
   
    "alert": [],
	"alertdialog": [],
	"button": [],
	"checkbox": [],
	"dialog": [],
	"gridcell": [],
	"link": [],
	"log": [],
	"marquee": [],
	"menuitem": [],
	"menuitemcheckbox": [],
	"menuitemradio": [],
	"option": [],
	"progressbar": [],
	"radio": [],
	"scrollbar": [],
	"searchbox": [],
	"slider": [] ,
	"spinbutton": [],
	"status": [],
	"switch" : [],
	"tab": [],
	"tabpanel": ["aria-expanded"],
	"textbox": [],
	"treeitem": []
   };

var compositeRoles = {
	"combobox": [],
	"grid": [],
	"listbox": [],
	"menu": [],
	"menubar": [],
	"radiogroup": [],
	"tablist": [],
	"tree": [],
	"treegrid": []
}

var documentStructureRoles = {
	
	"application": [],
	"article": [],
	"cell" : [],
	"columnheader": [],
	"definition": [],
	"directory": [],
	"document": [],
	"feed": [],
	"figure": [],
	"group": [],
	"heading": [],
	"img": [],
	"list" : [],
	"listitem": [],
	"math": [],
	"none" : [],
	"note": [],
	"presentation": [],
	"region": [],
	"row": [],
	"rowgroup": [],
	"rowheader": [],
	"separator": [],
	"table": [],
	"term" : [],
	"toolbar": []
};

var landmarkRoles = {
	
	"banner": [],
	"complementary": [] ,
	"contentinfo": [],
	"form": [],
	"main": [],
	"navigation": [],
	"search": []
};

var ariaStates = {
	//widgetStates
	
};

var globalStates = [ "aria-label"];

var groups = {"Widget Roles" : widgetRoles, "Composite Roles": compositeRoles, "Document Structure Roles": documentStructureRoles, "Landmark Roles": landmarkRoles};

var widgetIncrement = 0;

$("#demoContent").delegate(".roleTest", "keydown", function(event) {
	console.log(event.keyCode);
	if ($.inArray(event.keyCode, [13, 32, 37, 38, 39, 40]) == -1)
		return;

	event.stopPropagation();
	event.preventDefault();
	var target = $(event.target);
	var dState;
	switch (event.keyCode) {
		case 32:
		toggleState(target, event.shiftKey ? true : false);
		break;
		case 39:
		case 40:
		toggleState(target, false);
		break;
		case 37:
		case 38:
		toggleState(target, true);
		break;
	}
});

$("#demoContent").delegate(".roleTest", "click", function(event) {
	toggleState($(event.target), false);
});

function toggleState(elem, backwards) {
	var stateDescHTML = "", dStateDescHTML = "";
	var stateNames = elem.attr("class").match(/dState-([^\s]+)/g);
	var result, stateName, stateValue, stateValues, newValue, stateValueIndex, newStateValueIndex;
	var pattern = /dState-([^\s]+)/g;
	while ((result = pattern.exec(elem.attr("class"))) != null) {
		stateName = result[1];
		console.log("hoi" + stateName);
		var stateValue = elem.attr(stateName);
		var stateValues = ariaStates[stateName];

		if (!stateValue || !stateValue)
			return;

		var newStateValue;
		switch (stateValues[0]) {
			case "%n":
				if (!isNaN(stateValue))
					newStateValue = backwards ? parseInt(stateValue) - 1 : parseInt(stateValue) + 1;
			break;
			case "%s":
				newStateValue = stateValue.replace(/([^0-9]*)([0-9]+)([^0-9]*)/, function(match, match1, match2, match3) {
					console.log(match2);
					var newValue = backwards ? parseInt(match2) - 1: parseInt(match2) + 1;
					return match1 + newValue + match3
					});
			break;
			default:
				stateValueIndex = stateValues.indexOf(stateValue);
				if (stateValueIndex == -1)
					stateValueIndex = 0;

				newStateValueIndex = backwards ? --stateValueIndex : ++stateValueIndex;
				if (newStateValueIndex >= stateValues.length)
					newStateValueIndex = 0;
				else if (newStateValueIndex < 0)
					newStateValueIndex = stateValues.length - 1;
				newStateValue = stateValues[newStateValueIndex];
		}
		elem.attr(stateName, newStateValue);
		stateDescHTML += stateName + " = '" + newStateValue + "'<br />";
	}
	elem.closest(".widgetDemo").find(".dStateDesc").html(stateDescHTML);
}

$.each(groups, function(groupName, roles ){
	$("#demoContent").append("<h2>" + groupName + "</h2>");

	$.each(roles, function(roleName, roleStates) {
		var section = $("<section class='clearfix' id='"+roleName+"'></section>").appendTo("#demoContent");
		section.append("<h3>role='"+ roleName +"'</h3>");
		$.merge(roleStates, globalStates);
		$.each(roleStates, function (i, state) {
			var stateNames = state.split(" ");
			var html = "", preHTML = "", attribHTML = " ", stateHTML=" ", postHTML="", noState=false, noDState = false, dStateHTML=" ", stateDescHTML = "", dStateName = "", dStateDescHTML = "", stateIsDynamic = false, noStateDesc = false;
			$.each(stateNames, function(j, stateName){
				if (!ariaStates[stateName]) {
					return;
				}
				var stateValues = ariaStates[stateName], stateValue = stateValues[0];
					switch (stateValue) {
						case "%idr_labelledBy":
							stateValue = "lbl1 lbl2";
						break;
						case "%idr_describedBy":
							stateValue = "desc1 desc2";	
						break;
						case "%idr_singleDescribedBy":
							stateValue = "desc1";				
						break;
						case "%idr_flowTo":
							stateValue = "flowTo1 flowTo2";
						break;
						case "%idr_activeDescendant":
						stateValue = "activeDescendant";
						break;
						case "%idr_controls":
							stateValue = "controls1 controls2";		
						break;
						case "%idr_owns":
							stateValue = "owns1 owns2";	
						break;
						case "%idr_htmlLabel":
							noState = true;
							noStateDesc = true;
							postHTML += "<label for='role"+ widgetIncrement +"'>My Label</label>";
							stateDescHTML = "HTML Label";
						break;
						case "%n":
						case "%s":
							stateValue = stateValues[1];
						break;
						
							return;
						break;
					}

				if (!noState) {	
					stateHTML += stateName + "='"+ stateValue +"' ";	
				}
				if (!noStateDesc) {
					if (j==0 || stateIsDynamic) {
						dStateDescHTML += stateName + " = '" + stateValue +"'<br />";
						dStateHTML += " dState-"+ stateName;
						stateIsDynamic = false;
					}
					else {
						stateDescHTML += stateName + " = '" + stateValue +"'<br />";	
					}
				}
				stateIsDynamic = false;
				if (stateName == "aria-valuenow") {
					stateIsDynamic = true;
				}	
			});

			html += "<div class='widgetDemo'>"+ preHTML +"<article id='role" + widgetIncrement++ +"' class='roleTest "+ roleName + dStateHTML +"' role='"+ roleName +"' "+ attribHTML + stateHTML + " aria-label='acc name'>&nbsp;&nbsp;&nbsp;&nbsp;</article>"+ postHTML +"</div>";
			section.append(html);
			});

		});
	});

 });
