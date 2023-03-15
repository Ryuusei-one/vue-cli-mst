<template>
    <div>
        <router-link to="/index">
        <ol class="breadcrumb">
            
                <li>
                    <a href="#">首页</a>
                </li>
            
            <li class="active" v-text="$route.meta.title"></li>
        </ol>
        </router-link>
    </div>
</template>

<script>
export default {
}
</script>

<style>

</style>