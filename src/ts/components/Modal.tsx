import { StyleSheet } from '../TypeDefinitions'

const Modal = () => (
    <div style={styles.modal}>
        <div style={styles.inputLabel}>
            <p>Buy Now</p>
            <input />
        </div>
        <div>
            <p>Buy Now</p>
            <input />
        </div>
        <div>
            <p>Buy Now</p>
            <p> </p>
        </div>
    </div>
)

const styles: StyleSheet = {
    modal: {
        height: 250,
        width: 250,
        border: '1px solid rgba(0, 0, 0, 0.25)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    inputLabel: {
        display: 'flex',
        flexDirection: 'row',
    },
}

export default Modal
