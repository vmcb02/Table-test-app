
export const AddData = ({ firstName, lastName, title, family, image }) => {
  return (
    <>
    <tr>
        <td>{ firstName } { lastName }</td>
        <td>{ title }</td>
        <td>{ family }</td>
        <td><div className="div_item"><img src={ image } /></div></td>
                    
                
    </tr>
    </>
  )
}
