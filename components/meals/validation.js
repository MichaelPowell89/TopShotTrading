export default function Validation(props) {
    return (
        <span style={props.isValid ? { opacity: 0 } : { color: 'red', opacity: 1 }}>{props.name} Required</span>
    )
}