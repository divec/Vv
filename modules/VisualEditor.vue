<template>
	<div class="visualeditor-container"></div>
</template>

<script>
/* global $, ve */
module.exports = {
	name: 'VisualEditor',
	props: {
		title: String
	},
	methods: {
		getContent( html ) {
			return this.target.getSurface().getHtml();
		},
		setContent( html ) {
			this.target.clearSurfaces();
			this.target.addSurface(
				ve.dm.converter.getModelFromDom(
					ve.createDocumentFromHtml( html )
				)
			);
		}
	},
	mounted() {
		var $instance = $( this.$el ),
			component = this,
			title = mw.config.values.vvTestPageName,
			platform = new ve.init.mw.Platform( ve.messagePaths );

		ve.debug = null;
		this.readyPromise = platform.getInitializedPromise()
			.then( function ( response ) {
				component.target = new ve.init.mw.Target();
				$instance.append( component.target.$element );
				component.setContent( '' );
			} )
			.fail( function () {
				$instance.text( 'Sorry, this browser is not supported.' );
			} );
	},
	beforeDestroy() {
		if ( this.target ) {
			this.target.destroy();
			this.target = null;
		}
	}
};
</script>
