import {createPool} from 'mysql2/promise'
const pool = createPool({
    host: 'caboose.proxy.rlwy.net',
    port: 53254,
    database: 'railway',
    user: 'root',
    password: 'xrZPlWRygvKvAbdOVkpnhunfbrYQViCf'
})

export {pool};