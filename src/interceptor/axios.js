import axios from "axios";
export const axiosCli = () => {
  const api = axios.create({
    baseURL: "http://localhost:5000/api/",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    timeout: 20000, // Tăng timeout lên 20 giây
    validateStatus: function (status) {
      return status <= 500;
    },
  });
  api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        // Add Bearer prefix if not already present
        config.headers.Authorization = token.startsWith("Bearer ")
          ? token
          : `Bearer ${token}`;
        console.log("[AxiosCli] Added token to request headers");
      } else {
        console.log("[AxiosCli] No token found to add to headers");
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    (response) => {
      console.log(
        `[AxiosCli] Response from ${response.config.url}: Status ${response.status}`
      );
      return response;
    },
    (error) => {
      if (error.response) {
        console.error(
          `[AxiosCli] Response error: ${error.response.status} from ${
            error.config?.url || "unknown URL"
          }`
        );
        // Handle authentication errors
        if (error.response.status === 401) {
          console.warn(
            "[AxiosCli] Authentication error - token may be invalid or expired"
          );
          // Optionally clear token and redirect to login
          // localStorage.removeItem("accessToken");
          // window.location.href = "/login";
        }
      } else if (error.request) {
        console.error(
          `[AxiosCli] No response received for request to ${
            error.config?.url || "unknown URL"
          }`
        );
      } else {
        console.error(`[AxiosCli] Error setting up request: ${error.message}`);
      }
      return Promise.reject(error);
    }
  );
};
export const delById = async (url) => {
  const res = await axiosCli().del(url);
  return res;
};
export const addItems = async (url, data) => {
  try {
    const response = await axiosCli().post(url, data);
    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    if (error.response) {
      return {
        status: error.response.status,
        error: error.response.data,
      };
    } else if (error.request) {
      return {
        status: 400,
        error:
          "Yêu cầu không được gửi đi hoặc không nhận được phản hồi từ server",
      };
    } else {
      return {
        status: 500,
        error: "Có lỗi không xác định",
      };
    }
  }
};
export const getItems = async (url) => {
  try {
    const response = await axiosCli().get(url);
    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    let errorMessage = "Không xác định";
    let errorStatus = 500;
    if (error.response) {
      errorStatus = error.response.status;
      errorMessage = JSON.stringify(error.response.data);
      return {
        status: errorStatus,
        error: error.response.data,
      };
    } else if (error.request) {
      if (error.code === "ECONNABORTED") {
        errorMessage =
          "Timeout - Server không phản hồi trong thời gian cho phép";
      } else {
        errorMessage = "Không thể kết nối đến server";
      }
      return {
        status: errorStatus,
        error: errorMessage,
      };
    } else {
      return {
        status: errorStatus,
        error: errorMessage,
      };
    }
  }
};
export const putItems = async (url, data) => {
  try {
    const response = await axiosCli().put(url, data);
    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    if (error.response) {
      return {
        status: error.response.status,
        error: error.response.data,
      };
    } else if (error.request) {
      return {
        status: 400,
        error:
          "Yêu cầu không được gửi đi hoặc không nhận được phản hồi từ server",
      };
    } else {
      return {
        status: 500,
        error: "Có lỗi không xác định",
      };
    }
  }
};
export const getDataByParams = async (url) => {
  const res = await axiosCli().get(url);
  return res;
};
export const updateItem = async (url, data) => {
  try {
    const response = await axiosCli().put(url, data);
    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    if (error.response) {
      return {
        status: error.response.status,
        error: error.response.data,
      };
    } else if (error.request) {
      return {
        status: 400,
        error:
          "Yêu cầu không được gửi đi hoặc không nhận được phản hồi từ server",
      };
    } else {
      return {
        status: 500,
        error: "Có lỗi không xác định",
      };
    }
  }
};
export const patchItem = async (url, data) => {
  const res = await axiosCli().patch(url, data);
  return res;
};
