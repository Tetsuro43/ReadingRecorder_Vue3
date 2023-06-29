<script>
export default {
    name: 'Article',
    props: {
        aid: String,
        // aid: Number, // index.jsでNumber型に変換
    }
}
</script>

<template>
    <!-- <span>記事コード: {{ $route.params.aid }}</span> -->
    <span>記事コード: {{ aid }}</span>
</template>