const app = new Vue({
  el: '#app',
  data: {
    user: {}
  },
  mounted() {
    // Fetch user data from backend API
    fetch('/api/user')
      .then(response => response.json())
      .then(data => {
        this.user = data;
      })
      .catch(error => console.error('Error fetching user data:', error));
  }
});