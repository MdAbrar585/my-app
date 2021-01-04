import React, { useState } from 'react';
import fakeData from '../../fakeData';
import GetData from '../GetData/GetData';


const LoadData = () => {
    const f10 = fakeData.slice(0,10);
    const [product,setProduct] = useState(f10);
    console.log(fakeData);
    return (
        <div>
           <h1> {product.length}</h1>  
           <ul>
               {
                   product.map(pd => <GetData product={pd}> </GetData>)
               }
           </ul>
            
        </div>
    );
};

export default LoadData;