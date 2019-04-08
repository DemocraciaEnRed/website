import { t } from '../../../polyglot-modules/polyglot.js'
import Parity from "../component/Parity"
const Horizontalbars = () => (
    
        <section className="parity-section">
            <Parity />
            <style jsx>
            {`
            .parity-section {
                display: flex;
                justify-content: center;                width: 100%;
            }
           `}
            </style>
        </section>
    
)

export default Horizontalbars