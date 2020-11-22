<template>
  <div>
      <div class="card">
            <div class="card-header">
                    <h5 class="card-title">{{ post.topic }}</h5>
                    <p :topic="post.created_at | moment('dddd, MMMM Do YYYY, h:mm:ss a')">
                        {{ post.created_at | moment("from") }}
                    </p>
                    <p>By {{ post.user.name }}</p>
                    <p>View {{ post.view_count }}</p>
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
<!-- ------------------------------------------------------- -->
        <div class="form-group" id="root">
            <label class="text-white mt-3">แสดงความคิดเห็น</label><br>
            <textarea class="form-control" v-model="newComment" @keyup.enter="addComment"></textarea><br>
            <button class="form-control btn btn-primary" @click="addComment">+ Add </button>
            <div class="card mt-3">
            <ul>
                <li v-for="comment in comments" :key="comment.name">{{comment.name}} </li>
            </ul>
            </div>

        </div>

  </div>
</template>

<script>
export default {
    name:'root',
    props: ['post'],
    data(){
        return {
            comments: [
          
            ],
            newComment: ''
        }
    },
    methods: {
       addComment:function(){
        if(this.newComment != ''){
        this.$fire({
        title: "Post comment!!",
        text: "Post success",
        type: "success",
        timer: 3000
        }).then(r => {
            this.comments.push({name:this.newComment})
           this.newComment = ''
        console.log(r.value);
        });
        }else{
                    this.$fire({
        title: "You Can't post comment!!",
        text: "plese comment your comment",
        type: "warning",
        timer: 3000
        }).then(r => {
        console.log(r.value);
        });
        }



       } ,
        // simpleAlert(){
        // this.$fire({
        // title: "Post comment!!",
        // text: "Post success",
        // type: "success",
        // timer: 3000
        // }).then(r => {
        // console.log(r.value);
        // });
        // }
    }


    

}
</script>

<style>

</style>