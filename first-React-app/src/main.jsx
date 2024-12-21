import { react } from 'react'
import { createRoot } from 'react-dom/client'

let canvote;
let age = 17
if (age > 18) {
  canvote = "he can vote"
} else {
  canvote = "he can't vote"
}

createRoot(document.getElementById('root')).render(<h1>canvote</h1>)

