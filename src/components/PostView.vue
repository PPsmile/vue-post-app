<template>
  <div>
      <div class="card">
            <div class="card-header">
                    <h5 class="card-title">{{ post.topic }}</h5>
                    <p :topic="post.created_at | moment('dddd, MMMM Do YYYY, h:mm:ss a')">
                        {{ post.created_at | moment("from") }}
                    </p>
                    <p>By {{ post.user.name }}</p>
            </div>
            <div class="card-body">
                <div class="card-text">{{ post.content }}</div>
                <div v-if="post.attachments[0].asset_type === 'storage-images' ">
                    <img :src="post.attachments[0].asset_url" alt="" height="500" width="500" />
                </div>
                <div v-else>
                    <embed :src="post.attachments[0].asset_url"  width="100%" height="500px"/>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
export default {
    props: ['post']
}
</script>

<style>

</style>