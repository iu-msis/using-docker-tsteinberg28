var randomuser = new Vue({
  el: '#userInfo',
  data: {
    users: {
      name:"",
      dob:"",
      age:"",
      email:"",
      nat:"",
      picture:"",
      phone:""
    }
  },
  methods: {
    fetchUsers() {
      fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(json => {randomuser.users = json.results[0]});
    }
  },
  created() {
    this.fetchUsers()
  }
});
