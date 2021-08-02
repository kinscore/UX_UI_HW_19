$( () => {
	[ "em", "why", "in" ].forEach( it =>
		$("." + it).tooltip({
			position: { my: "left-30 bottom-50", at: "center top" },
			classes: { "ui-tooltip": it + "-tooltip" }
		}));
});
