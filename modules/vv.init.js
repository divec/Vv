var Vue = require( 'vue' ),
	Vv = require( './Vv.vue' );

/**
 * @class mw.vv
 * @singleton
 */
mw.vv = {};

mw.vv.initState = {};
mw.vv.init = function ( $container ) {
	var title, app;
	title = mw.config.values.vvTestPageName;
	window.app = app = new Vue( {
		el: $container[ 0 ],
		render: function ( h ) {
			return h( Vv );
		}
	} );
	app.visualEditor = app.$children[ 0 ].$refs[ 'visualeditor' ];
	app.visualEditor.readyPromise
		.then( function () {
			return mw.libs.ve.targetLoader.requestParsoidData( title, {} );
		} )
		.then( function ( response ) {
			app.visualEditor.setContent( response.visualeditor.content );
		} )
		.fail( function ( error ) {
			app.visualEditor.setContent( error );
		} );

};
mw.hook( 'wikipage.content' ).add( mw.vv.init );
