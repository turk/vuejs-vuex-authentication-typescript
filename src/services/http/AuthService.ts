import axios from 'axios'

class AuthService {
  async login(user: any) {
    const response = await axios.post('https://reqres.in/api/login', user)
    localStorage.setItem('token', response.data.token);
    return response.data

  }
}

export default new AuthService();
