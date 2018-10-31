<template>
    <form class="lg-condition">
    	<div class="lg-condition-box">
    		<table>
    			<slot></slot>
    		</table>
    	</div>
    	<div class="lg-condition-box" style="min-height:30px" v-if="$slots.bottom">
    		<slot name="bottom"></slot>
    	</div>
    </form>
</template>
<script>
export default {
    name: 'searchbox'
}

</script>

