<template>
    <header class="header">
        <nav class="navbar navbar-expand navbar-dark bg-dark">
            <router-link to="/" class="navbar-brand"><img src="https://ci5.googleusercontent.com/proxy/hF63XQVvMm64OX7Sku6E6BEBzw7og6BAShsBJfWnF45nWGUge1HsCIrWUJxdYJHFm-YHLrd9bhk3mfiNHSqOmVcQc0lsyhqca_qArNWXBrZ6iLlOLZbu__kZY5OzECJsSEOBdvOrWuJ0Kl8eZgB4imC8IxpeOdb6=s0-d-e1-ft#https://www.freelogodesign.org/file/app/client/thumb/ef389ec0-1132-45b7-9dcc-98908facbe36_200x200.png" width="60" height="60"></router-link>
            <div class="navbar-nav mr-auto" >
                <li class="nav-item" v-if="user">
                    <router-link to="/posts" class="nav-link">All Posts</router-link>
                </li>
                <li class="nav-item" v-if="user">
                    <router-link to="/add" class="nav-link">Add Post</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/mypost" class="nav-link">My Post</router-link>
                </li>
            </div>
            <div class="navbar-nav">
                <li class="nav-item" v-if="!user">
                    <a href="#" class="nav-link" @click="login">Login</a>
                </li>
                <li class="nav-item" v-if="user">
                    <span href="#" class="nav-link">{{ profile }}</span>
                </li>
                <li class="nav-item" v-if="user">
                    <a href="#" class="nav-link" @click="handleLogout">Logout</a>
                </li>
            </div>
        </nav>
    </header>
</template>
<script>
import AuthenService from '@/services/AuthenService'
import { mapState, mapActions } from 'vuex'

export default {
    name: "app-header",
    computed: {
        ...mapState('account', ['user', 'profile'])
    },
    methods: {
        ...mapActions('account', ['logout']),
        login(e) {
            e.preventDefault();
            AuthenService.login()
        },
        handleLogout(e) {
            e.preventDefault();
            this.logout()
        }
    }
}
</script>
<style>

</style>