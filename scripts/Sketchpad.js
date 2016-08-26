$(document).ready(function() {
	buildGrid();

	var $cell = $(".cell");
	$cell.mouseenter(function() {
		if( !($(this).attr("class") === "cell max") ) {
			$(this).css("background-color", "black");
			var op = $(this).css("opacity");
			op = parseFloat(op, 10);
			if( op === 1 ) op = 0;
			op = (op+0.1).toString();
			if( op === "1") $(this).addClass("max");
			$(this).css("opacity", op);
		}
	});
});

function buildGrid() {
	var $grid = $('#grid tbody');
	var blockForGrid = "<td> <div class='cell'></div> </td>";
	for( var x=0; x<16; x++ ) {
		$grid.append("<tr></tr>");
		var row = $("#grid tbody:last-child");
		for( var y=0; y<16; y++ ) {
			row.append(blockForGrid);
		}
	}
}

function reset() {
	var $cell = $(".cell");
	$cell.css("opacity", "1");
	$cell.css("background-color", "transparent");
}