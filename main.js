import './style.css'
import { complexModifications } from 'karabiner.ts'
import { rules } from './rules.js'

const config = complexModifications(rules).rules
const json = JSON.stringify(config.length === 1 ? config[0] : config, null, 2)
document.querySelector(
  '#app',
).innerHTML = `<pre><code class="language-json">${json}</code></pre>`
