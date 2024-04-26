const app = new Vue({
    el: '#app',
    data: {
      user: {}
    },
    mounted() {
      // Simulating fetching user data from an API
      setTimeout(() => {
        this.user = {
          name: 'John Doe',
          avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
          bio: 'Passionate Web Developer | UI/UX Enthusiast',
          email: 'john.doe@example.com',
          location: 'New York, USA',
          website: 'https://www.johndoe.com',
          phone: '+1 123 456 7890'
        }
      }, 1000);
    },
    methods: {
      changeUser() {
        // Simulating changing user data
        this.user = {
          name: 'Jane Smith',
          avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
          bio: 'Creative Designer | Traveler',
          email: 'jane.smith@example.com',
          location: 'Los Angeles, USA',
          website: 'https://www.janesmithdesigns.com',
          phone: '+1 987 654 3210'
        }
      }
    }
  });
  