<template>
	<div>
		<visualeditor ref="visualeditor"/>
	</div>
</template>

<script>
module.exports = {
	components: {
		'visualeditor': require( './VisualEditor.vue' )
	},
	data: function () {
		return { title: mw.config.values.vvTestPageName };
	}
};
</script>

<style lang="less">
</style>
