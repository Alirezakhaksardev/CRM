import { useRouter } from "next/router";
import CustomerEditPage from "../../components/template/CustomerEditPage"
import { useEffect, useState } from "react";

 function Index() {
    const [data , setData] = useState(null);
    
    const router = useRouter();
    const { query : {customerId} , isReady } = router;

    useEffect(()=>{
        if(isReady){
            fetch(`/api/customer/${customerId}`)
            .then(res => res.json())
            .then(data => setData(data.data));
        }
    },[isReady])

    if(data){
        return (
            <CustomerEditPage data={data} id={customerId} />
        )
    }
    return <h1>Loding...</h1>
}

export default Index