import { polyglot } from '../polyglot-modules/polyglot'
import es from '../translations/es.json'
import en from '../translations/en.json'

const settingLanguage = (lang, changeState) => () => {
    polyglot.extend(lang) 
    polyglot.locale(lang.language) 
    changeState()
}


const LangBar = ( { changeState } ) => (
  <div>
    <button onClick={settingLanguage(es, changeState)}>
      ES
    </button>
    <button onClick={settingLanguage(en, changeState)}>
      EN
    </button>
  </div>
)

export default LangBar