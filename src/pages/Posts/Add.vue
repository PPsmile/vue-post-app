<template>
    <div class="row">
    <div class="col-md-6">
        <h1 class="text-white">Add New Subject</h1>
        <div class="alert alert-danger" v-if="error">
            {{ error }}
        </div>

        <div v-if="!submitted">
            <div class="form-group">
                <label class="text-white" for="topic">Subject</label>
                <input type="text" class="form-control"
                    id="topic" required v-model="post.topic"
                    name="topic"
                />
            </div>

            <div class="form-group">
                <label class="text-white" for="content">Detail</label>
                <textarea class="form-control"
                    id="content" required v-model="post.content"
                    name="content"
                />
            </div>

            <div>
                <p class="text-white">Select file to upload:</p>
                <!-- <button @click="d" class="btn btn-dark mb-2">Choose Files</button> -->
            </div>
            <input type="file" multiple :name="uploadFieldName" :disabled="isSaving" @change="filesChange($event.target.name, $event.target.asset_url); fileCount = $event.target.files.length"
            accept="image/*" class="input-file">
            <button @click="savePost" class="btn btn-success">Submit</button>
        </div>

        <div v-else>
            <h4>You submitted successfully!</h4>
            <button class="btn btn-success" @click="newPost">Add</button>
            <button class="btn btn-primary ml-1" @click="home">Back to Posts</button>
        </div>
    </div>

    <div class="col-md-6 mt-5">
        <h4 class="text-white">Preview Post</h4>
        <post-view :post="post"></post-view>
    </div>
    </div>
</template>

<script>
import PostsDataService from "@/services/PostsDataService";
import PostView from '@/components/PostView'
import router from '@/router'

export default {
  name: "add-post",
  data() {
    return {
      post: {
        id: null,
        topic: "",
        content: ""
      },
      submitted: false,
      error: ""
    };
  },
  methods: {
    savePost() {
      var data = {
        topic: this.post.topic,
        content: this.post.content
      };

      PostsDataService.create(data)
        .then(response => {
          this.post.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
          this.error = ""
        })
        .catch(e => {
          this.error = e.message
        });
    },
    
    newPost() {
      this.submitted = false;
      this.post = {};
    },

    home() {
        router.push({name: 'posts'})
    }
  },
  components: {
      PostView
  }
};
</script>

<style>

textarea {
    min-height: 30vh;
}
</style>