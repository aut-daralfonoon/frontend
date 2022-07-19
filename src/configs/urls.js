import { getEnv } from '../utils/envs.js'

const DEFAULT_BASE_URL = 'http://localhost:3000'
export const BASE_URL = getEnv('VUE_APP_BASE_URL') || DEFAULT_BASE_URL

export const API = `${BASE_URL}/api`
