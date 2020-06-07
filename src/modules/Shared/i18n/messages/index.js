import ClientMessage from './client-messages'
import UserMessage from './user-messages'

const en = {...ClientMessage.en, ...UserMessage.en}
const es = {...ClientMessage.es, ...UserMessage.es}
const pt = {...ClientMessage.pt, ...UserMessage.pt}

const messages = {en, es, pt}

export default messages
