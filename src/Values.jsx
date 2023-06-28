
export const Values = ({ firstName, lastName, title, family, image }) => {
  return (
    <>
    <tr>
        <td>{ firstName } { lastName }</td>
        <td>{ title }</td>
        <td>{ family }</td>
        <td><div className="div2"><img src={ image } /></div></td>
                    
                
    </tr>
    </>
  )
}
