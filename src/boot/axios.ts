import axios from 'axios'

/*
// We create our own axios instance and set a custom base URL.
// Note that if we wouldn't set any config here we do not need
// a named export, as we could just `import axios from 'axios'`
const axiosInstance = axios.create({
  baseURL: 'https://www.breakingbadapi.com/api/'
})

// for use inside Vue files through this.$axios
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
Vue.prototype.$axios = axiosInstance

// Here we define a named export
// that we can later use inside .js files:
export { axiosInstance }

*/

const axiosInstance = axios.create({
  baseURL: 'https://www.breakingbadapi.com/api/'
})

export default ({ app, router, Vue }: {app: any, router: any, Vue: any}) => {
  Vue.prototype.$axios = axiosInstance;
}

export {axiosInstance};

