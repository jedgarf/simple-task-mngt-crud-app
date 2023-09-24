import axios from 'axios';
import apiConfig from '../Config/api.config';

const url = apiConfig.api_base_url;
axios.defaults.headers.common = {'Authorization': `Bearer ${apiConfig.api_key}`};

var results = [];

const ShowTask = async (searchString = null) => {

    if (searchString === null || searchString === "") {
        var base_url = url + "/task/read";
    } else {
        var base_url = url + "/task/read?keyword=" + searchString;
    }

    await axios.get(base_url, {
        headers: {
            'Content-Type': 'application/json'
        }
      }).then((res) => {
        results = res.data;
      })
      .catch((err) => console.log(err));

    return results;
};

const AddTask = async (taskName) => {

    await axios.post(url + "/task/create", {
        name: taskName,
      }).then((res) => {
        results = res.data;
      })
      .catch((err) => console.log(err));

    return results;

};

const UpdateTask = async (taskName, id) => {
    const results = await axios.post(url + "/task/update/" + id, {
        name: taskName,
      });
    return results;
};

const DeleteTask = async (id) => {
    const results = await axios.get(url + "/task/delete/" + id);
    return results;
};

export { ShowTask, AddTask, UpdateTask, DeleteTask };