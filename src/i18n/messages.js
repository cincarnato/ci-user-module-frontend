import AuthMessage from '../modules/Auth/i18n/messages'
import SharedMessage from '../modules/Shared/i18n/messages'

const en = {...AuthMessage.en, ...SharedMessage.en}
const es = {...AuthMessage.es, ...SharedMessage.es}
const pt = {...AuthMessage.pt, ...SharedMessage.pt}

const messages = {en, es, pt}

export default messages
