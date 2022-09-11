import ComponentB from './componentB'
const ComponentA = ({ array }) => {
    return (
        <div>
            
            {array.map(item => <li>{item.Title}</li>)}
            <ComponentB array={array}/>
        </div>
    )
}
export default ComponentA