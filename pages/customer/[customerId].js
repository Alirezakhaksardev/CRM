import { Router, useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import CustomerDetailsPage from '../../components/template/CustomerDetailsPage'
function Index() {
    const router = useRouter();
    const [data , setData] = useState(null);
    const {query : {customerId} , isReady} = router 

    useEffect(()=>{
        if(isReady){
            fetch(`/api/customer/${customerId}`)
            .then(res => res.json())
            .then(data => setData(data.data));
        }
    },[isReady])

    if(data){
        return (
            <CustomerDetailsPage data={data} />
        )
    }
    return (
        <div> 
            Loding ...
        </div>
    )
}

export default Index