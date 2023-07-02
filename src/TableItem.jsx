
export const TableItem = ({ firstName, lastName, title, family, imageUrl }) => {
  return (
    <>
    <tr>
        <td>{ firstName } { lastName }</td>
        <td>{ title }</td>
        <td>{ family }</td>
        <td><div className="div_item"><img src={ imageUrl } /></div></td>
                    
                
    </tr>
    </>
  )
}
