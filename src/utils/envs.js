/* eslint-disable no-undef */
export function getEnv(key) {
    return import.meta.env[key]
}
