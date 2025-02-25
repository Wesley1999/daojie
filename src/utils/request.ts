import axios from 'axios';
import { ElMessage } from 'element-plus';

// 配置新建一个 axios 实例
const instance = axios.create({
	// baseURL: import.meta.env.VITE_API_URL as any,
	timeout: 50000,
	// headers: { 'Content-Type': 'application/json' },
});

// 添加请求拦截器
instance.interceptors.request.use(
	(config) => {
		console.log(config)
		return config;
	},
	(error) => {
		// 对请求错误做些什么
		return Promise.reject(error);
	}
);


// 添加响应拦截器
instance.interceptors.response.use(
	(response) => {
		if (response.data.code === 9999) {
			window.location.reload();
			return Promise.reject();
		} else if (response.data.code !== undefined && response.data.code !== 0) {
			ElMessage({
				message: response.data.message,
				type: 'error',
			})
			return Promise.reject();
		} else {
			return response;
		}
	},

);

// 导出 axios 实例
export default instance;
