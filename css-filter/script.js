'use strict'

const Item = {
  props: {
    post: {
      default: {},
      required: true,
      type: Object
    } 
  },
  template: `
    <div class="segment mb-5">
      <div class="review-item">
        <div class="row">
          <div class="col-3 d-none d-sm-block">
            <a href="#" class="post-brand">
              <img :src="post.banner" alt=""  class="post-brand-img">
            </a>
          </div>
          <div class="col-9">
            <div class="content">
              <a href="#" class="title">{{ post.title }}</a>
              <div class="created-at">发布日期：{{ post.created_at }}</div>
              <div class="views">总浏览量：{{ post.views }} reads</div>
            </div>
          </div>
          <div class="review-item-wrapper">
            <div class="bg-blur" :style="'background: url('+post.banner+') no-repeat; background-size: cover;'"></div>
          </div>
        </div>
      </div>
      <div class="post-container">
        <div class="post-content">
          <p>{{ post.content }}</p>
        </div>
        <div class="post-footer">
          <a href="#" class="btn btn-secondary text-uppercase">read more</a>
          <a href="#" class="comments text-muted">{{ post.comments }} Comments</a>
        </div>
      </div>
    </div>
  `
}

const PostModal = [{
  title: '准备过年：）',
  created_at: '2019-01-03',
  banner: 'https://cdn.lishaoy.net/wp-content/uploads/2018/10/keyclack-800x600.jpg',
  views: 998,
  content: '我朋友公司放15天啊，知道这个消息的我整个人都不好了...😭',
  comments: 32,
}, {
  title: 'Blog App with Vue',
  created_at: '2019-01-03',
  banner: 'https://cdn.lishaoy.net/wp-content/uploads/2018/11/notes2-800x600.jpg',
  views: 991,
  content: '用 Vue.js 做了个 Blog 小 App ，通过这个练习，可以熟悉及理解使用 Vue Components ...',
  comments: 120,
}]

new Vue({
  el: '.container',
  data: {
    PostModal,
  },
  components: {
    Item,
  }
})