<template>
	<div class="uk-container">
		<div class="uk-margin-small-top uk-text-right"><span class="uk-text-muted">サイト作成者: </span><a class="uk-link-muted" href="https://twitter.com/JADENgygo">@JADENgygo</a></div>
		<div class="uk-text-lead uk-link-text uk-text-center uk-margin-top">
			<router-link to="/">プリコネスタンプ</router-link>
		</div>
		<router-view class="uk-margin-bottom"></router-view>
	</div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Host extends Vue {
}
</script>
<style scoped>
</style>
