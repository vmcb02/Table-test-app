import { TableItem } from "./TableItem";
import Characters from './Characters.json';



export const TableContainer = () => {
   
const charactersDatas = Characters;

  return (
    <>
    <div className="container">
        <table>
                <tr>
                    <th>First-lastName</th>
                    <th>Title</th>
                    <th>Family</th>
                    <th>Image</th>
                    
                
                </tr>
        
            {
                charactersDatas.map((val) => (
                    <TableItem key={val.id}
                    { ...val }
                    />
                ))
            }

        </table>
    </div>
    </>
  )
}
