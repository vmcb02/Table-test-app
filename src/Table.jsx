import { useEffect, useState } from "react";
import { AddData } from "./AddData";
import { data } from './data';

export const Table = () => {
  
    const [datas, setDatas] = useState([]);

    const newDatas = () => {
        setDatas(data);
    }

    useEffect(() => {
      newDatas();
    }, [])
    

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
                datas.map((val) => (
                    <AddData key={val.id}
                    { ...val }
                    />
                ))
            }

        </table>
    </div>
    </>
  )
}
