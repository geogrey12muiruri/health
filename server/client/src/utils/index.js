import axios from 'axios';
import { SetPosts } from '../redux/postSlice.js';

const API_URL = "https://health-8.onrender.com";



export const API = axios.create({
    baseURL: API_URL,
    responsType: "json",
});

export const apiRequest = async ({url, token, data, method}) => {
    try{
       const result = await API(url, {
          
          method: method || "GET",
          data: data,
          headers: {
                "Content-Type": "application/json",
                Authorization: token ? `Bearer ${token}` : "",        
        },
       });
         return result?.data;
    } catch (error) {
        const err = error.response.data
        console.log(err)
        return {status: err.success, message: err.message}
    }
};

export const handleFileUpload = async (uploadFile) => {
    const formData = new FormData();
    formData.append("file", uploadFile);
    formData.append("upload_preset", "medplus");

    try {
        const response = await axios.post(
            `https://api.cloudinary.com/v1_1/dws2bgxg4/image/upload/`, // Replace 'dws2bgxg4' with your Cloudinary cloud name
            formData
        );
        return response.data.secure_url;
    } catch (error) {
        console.log(error);
        return { status: "failed", message: "Image upload failed" };
    }
}

// fetch posts function
export const fetchPosts = async (token, dispatch, uri, data) => {
    try {
        const res = await apiRequest({
            url: uri || "/posts", 
            token: token,
            method: "Post",
            data: data || {},
        });
        dispatch(SetPosts(res?.data));
        return;
    } catch (error) {
        console.log(error);
    }  
    
}

export const likePost = async ({uri, token}) => {
  try {
    const res = await apiRequest({
      url: uri,
      token: token,
      method: "Post",
    });
    return res;
  } catch (error) {
    console.log(error);
  }
}

export const deletePost = async (id, token) => {
    try {
          const res = await apiRequest({
              url: "/posts/" + id,
              token: token,
              method: "DELETE",
          });  
    }  catch (error) {
        console.log(error);
    }      
}

export const getUserInfo = async (token, id) => {
    try {
        const uri = id === undefined ? "/users/get-user" : "/users/get-user/" + id;

        const res = await apiRequest({
            url: uri,
            token: token,
            method: "POST",
        });

        if (res?.message ==="Authentication failed") {
            localStorage.removeItem("user");
            window.alert("Session expired, please login again");
            window.location.replace("/login");
        }

        return res?.user;

    } catch (error) {
        console.log(error);
    }
}

export const sendFriendRequest = async (token, id) => {
    try {
        const res = await apiRequest({
            url: "/users/friend-request",
            token: token,
            method: "POST",
            data: {requestTo: id},
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const viewUserProfile = async (token, id) => {
    try {
        const res = await apiRequest({
            url: "/users/profile-view",
            token: token,
            method: "POST",
            data: {id},
        });
        return;
    } catch (error) {
        console.log(error);
    }
}

export const acceptFriendRequest = async (token, id) => {
    try {
        const res = await apiRequest({
            url: "/users/accept-request",
            token: token,
            method: "POST",
            data: {requestFrom: id},
        });
        return res;
    } catch (error) {
        console.log(error);
    }
}

export const unfriendUser = async (token, id) => {
    try {
        const res = await apiRequest({
            url: "/users/unfriend-user",
            token: token,
            method: "POST",
            data: {id},
        });
        return res;
    } catch (error) {
        console.log(error);
    }
}
