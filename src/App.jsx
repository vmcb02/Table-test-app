import { useState } from "react";
import { Values } from "./Values";
import { data } from './data';



export const App = () => {

const [datas, setDatas] = useState(data);

  return (
    <>
    <div className="div">
        <table>
                <tr>
                    <th>First-lastName</th>
                    <th>Title</th>
                    <th>Family</th>
                    <th>Image</th>
                    
                
                </tr>
        
            {
                datas.map((val) => (
                    <Values key={val.id}
                    { ...val }
                    />
                ))
            }

        </table>
    </div>
    </>
  )
}
