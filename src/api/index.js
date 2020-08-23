



class taskAPI{
  async getTasks() {
    const response = await axios.get('https://test.megapolis-it.ru/api/list');
    return response;
  }

  async createTask(title) {
    const response = await axios.post('https://test.megapolis-it.ru/api/list', {title});
    return response;

  }

  async editTaks(id, title) {
    const response = await axios.post(`https://test.megapolis-it.ru/api/list/${id}`, {title});
      return response;

  }

  async deleteTask(id) {
    const response = await axios.delete(`https://test.megapolis-it.ru/api/list/${id}`)
    return response;
  }

}

const API = new taskAPI();

export default API;
