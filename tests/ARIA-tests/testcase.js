$(document).ready(function() {
   var widgetRoles = {
   	"alert": ["aria-expanded"],
	"alertdialog": ["aria-expanded", "aria-modal"],
	"button": ["aria-expanded", "aria-pressed"],
	"checkbox": ["aria-checked"],
	"dialog": ["aria-expanded", "aria-modal"],
	"gridcell": ["aria-readonly", "aria-required", "aria-selected", "aria-expanded"],
	"link": ["aria-expanded"],
	"log": ["aria-expanded"],
	"marquee": ["aria-expanded"],
	"menuitem": ["aria-posinset", "aria-setsize"],
	"menuitemcheckbox": ["aria-checked", "aria-posinset", "aria-setsize"],
	"menuitemradio": ["aria-checked", "aria-posinset", "aria-selected", "aria-setsize"],
	"option": ["aria-checked", "aria-posinset", "aria-selected", "aria-setsize"],
	"progressbar": ["aria-valuenow aria-valuetext aria-valuemax aria-valuemin"],
	"radio": ["aria-posinset", "aria-selected", "aria-setsize"],
	"scrollbar": ["aria-controls", "aria-orientation", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext"],
	"searchbox": ["aria-activedescendant", "aria-autocomplete", "aria-multiline", "aria-readonly", "aria-required", "aria-placeholder"],
	"slider": ["aria-valuenow aria-valuetext aria-valuemax aria-valuemin", "aria-orientation"] ,
	"spinbutton": ["aria-valuenow aria-valuetext aria-valuemax aria-valuemin", "aria-required", "aria-readonly"],
	"status": ["aria-expanded"],
	"switch" : ["aria-checked", "aria-readonly"],
	"tab": ["aria-expanded", "aria-selected"],
	"tabpanel": ["aria-expanded"],
	"textbox": ["aria-activedescendant", "aria-autocomplete", "aria-multiline", "aria-readonly", "aria-required", "aria-placeholder"],
	"timer": ["aria-expanded"],
	"tooltip": ["aria-expanded"],
	"treeitem": ["aria-level", "aria-posinset", "aria-setsize", "aria-expanded", "aria-checked", "aria-selected"]
   };

var compositeRoles = {
	"combobox": ["aria-autocomplete", "aria-required", "aria-activedescendant", "aria-orientation", "aria-expanded"],
	"grid": ["aria-level", "aria-multiselectable", "aria-readonly", "aria-activedescendant", "aria-expanded", "aria-colcount", "aria-rowcount"],
	"listbox": ["aria-multiselectable", "aria-required", "aria-expanded", "aria-activedescendant", "aria-orientation"],
	"menu": ["aria-activedescendant", "aria-expanded", "aria-orientation"],
	"menubar": ["aria-activedescendant", "aria-expanded", "aria-orientation"],
	"radiogroup": ["aria-required", "aria-activedescendant", "aria-expanded", "aria-orientation"],
	"tablist": ["aria-level", "aria-activedescendant", "aria-expanded"],
	"tree": ["aria-multiselectable", "aria-required", "aria-activedescendant", "aria-expanded", "aria-orientation"],
	"treegrid": ["aria-level", "aria-multiselectable", "aria-readonly", "aria-activedescendant", "aria-expanded", "aria-multiselectable", "aria-required", "aria-rowcount", "aria-colcount"]
};

var documentStructureRoles = {
	"application": ["aria-activedescendant"],
	"article": ["aria-expanded"],
	"cell" : ["aria-colindex", "aria-colspan", "aria-rowindex", "aria-rowspan"],
	"columnheader": ["aria-sort", "aria-readonly", "aria-required", "aria-selected", "aria-expanded", "aria-colindex", "aria-colspan","aria-rowindex", "aria-rowspan"],
	"definition": ["aria-expanded"],
	"directory": ["aria-expanded"],
	"document": ["aria-expanded"],
	"feed": ["aria-expanded"],
	"figure": ["aria-expanded"],
	"group": ["aria-activedescendant", "aria-expanded"],
	"heading": ["aria-level", "aria-expanded"],
	"img": ["aria-expanded"],
	"list" : ["aria-expanded"],
	"listitem": ["aria-level", "aria-posinset", "aria-setsize", "aria-expanded"],
	"math": ["aria-expanded"],
	"none" : [],
	"note": ["aria-expanded"],
	"presentation": [],
	"region": ["aria-expanded"],
	"row": ["aria-level", "aria-selected", "aria-activedescendant", "aria-expanded", "aria-colindex", "aria-rowindex"],
	"rowgroup": ["aria-activedescendant", "aria-expanded"],
	"rowheader": ["aria-readonly", "aria-required", "aria-selected", "aria-expanded", "aria-colindex", "aria-colspan","aria-rowindex", "aria-rowspan"],
	"separator": ["aria-expanded", "aria-orientation", "aria-valuenow aria-valuetext aria-valuemax aria-valuemin"],
	"table": ["aria-rowcount", "aria-colcount"],
	"term" : ["aria-expanded"],
	"toolbar": ["aria-activedescendant", "aria-expanded", "aria-orientation"]
};

var landmarkRoles = {
	
	"banner": ["aria-expanded"],
	"complementary": ["aria-expanded"] ,
	"contentinfo": ["aria-expanded"],
	"form": ["aria-expanded"],
	"main": ["aria-expanded"],
	"navigation": ["aria-expanded"],
	"search": ["aria-expanded"]
};

var ariaStates = {
	//widgetStates
	"aria-autocomplete": ["none", "list", "inline", "both"],
	"aria-checked" : ["true", "false", "mixed"],
	"aria-current" : ["true", "false", "page", "step", "location", "date", "time"],
	"aria-disabled": ["true", "false"],
	"aria-expanded": ["true", "false"],
	"aria-hidden": ["true", "false"],
	"aria-haspopup": ["true", "false", "dialog", "listbox", "menu", "tree"],
	"aria-hidden": ["true", "false"],
	"aria-invalid": ["grammar", "true", "false", "spelling"],
	"aria-keyshortcuts" : ["%s", "Enter"],
	"aria-label": ["My label"],
	"aria-level": ["%n", 1],
	"aria-modal" : ["true", "false"],
	"aria-multiline": ["true", "false"],
	"aria-multiselectable": ["true", "false"],
	"aria-orientation": ["horizontal", "vertical"],
	"aria-placeholder" : ["%s", "my placeholder"],
	"aria-pressed": ["true", "false"],
	"aria-readonly": ["true", "false"],
	"aria-roledescription" : ["%s", "my role description"],
	"aria-required" : ["true", "false"],
	"aria-selected" : ["true", "false"],
	"aria-sort": ["ascending", "descending","none", "other"],
	"aria-valuemax": ["%n", 100],
	"aria-valuemin": ["%n", 0],
	"aria-valuenow": ["%n", 25],
	"aria-valuetext": ["%s", "25 dollar"],
	"aria-colspan" : ["%n"],
	//liveRegionStates
	"aria-atomic" : ["true", "false"],
	"aria-busy" : ["true", "false"],
	"aria-live": ["off", "polite", "assertive"],
	"aria-relevant": ["additions", "removals", "text", "all"],
	//dragAndDropStates
	"aria-dropeffect": ["copy", "move", "link", "execute", "popup", "none"],
	"aria-grabbed": ["true", "false"],
	//relationShipStates
	"aria-activedescendant": ["%idr_activeDescendant"],
	"aria-colcount" : ["%n", 4],
	"aria-colindex" : ["%n", 1],
	"aria-colspan" : ["%n", 2],
	"aria-controls" : ["%idr_controls"],
	"aria-details":  ["%idr_singleDescribedBy"],
	"aria-describedby": ["%idr_describedBy"],
	"aria-flowto": ["%idr_flowTo"],
	"aria-labelledby": ["%idr_labelledBy"],
	"aria-errormessage" : ["%idr_singleDescribedBy"],
	"aria-owns": ["%idr_owns"],
	"aria-posinset": ["%n", 10],
	"aria-rowcount" : ["%n", 4],
	"aria-rowindex" : ["%n", 3],
	"aria-rowspan" : ["%n", 4],
	"aria-setsize": ["%n", 100],
	"htmlLabel": ["%idr_htmlLabel"],
	"title": ["my title"]
};

var globalStates = ["aria-current", "aria-controls","aria-details", "aria-disabled", "aria-grabbed", "aria-dropeffect", "aria-haspopup", "aria-hidden", "aria-labelledby", "aria-label", "aria-describedby", "aria-owns", "aria-flowto","aria-keyshortcuts", "aria-errormessage", "aria-live","aria-atomic", "aria-busy", "aria-relevant", "aria-roledescription"];

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
		var section = $("<details class='clearfix'></details>").appendTo("#demoContent");
		section.append("<summary>role='"+ roleName +"'</summary>");
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

			html += "<div class='widgetDemo'><p class='stateDesc'><span class='dStateDesc'>"+dStateDescHTML+"</span>"+ stateDescHTML +"</p>"+ preHTML +"<span id='role" + widgetIncrement++ +"' class='roleTest "+ roleName + dStateHTML +"' tabindex='0' role='"+ roleName +"' "+ attribHTML + stateHTML + " >&nbsp;&nbsp;&nbsp;&nbsp;</span>"+ postHTML +"</div>";
			section.append(html);
			});

		});
	});

 });
