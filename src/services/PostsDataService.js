import http from "@/plugins/axios"

class PostsDataService {
    getAll() {
      return http.get("/posts");
    }
  
    get(id) {
      return http.get(`/posts/${id}`);
    }
  
    create(data) {
      return http.post("/posts", data);
    }
  
    update(id, data) {
      return http.put(`/posts/${id}`, data);
    }
  
    delete(id) {
      return http.delete(`/posts/${id}`);
    }

    find(topic) {
        return http.get(`/posts/search/${topic}`)
    }

}

// class CommentsDataSevice {
//   getAll(){
//     return http.get("comments");
//   }
//   get(id){
//     return http.get(`/comments`)
//   }
// }
  
export default new PostsDataService();