$(document).ready(function() {
	var $grid = $('#grid tbody');
	var blockForGrid = "<td> <div></div> </td>";
	for( var x=0; x<16; x++ ) {
		$grid.append("<tr></tr>");
		var row = $("#grid tbody:last-child");
		for( var y=0; y<16; y++ ) {
			row.append(blockForGrid);
		}
	}
});