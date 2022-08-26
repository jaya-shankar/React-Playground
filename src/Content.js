import React, { Suspense } from "react";
import { Button,Box,Text,
    PageContent,Main } from "grommet";
import axios from "axios";



export default function Content(){

    const [count,setCount] = React.useState(0);
    const [toggle,setToggle] = React.useState(false);
    const [data,setData] = React.useState([]);
    const [showLoading,setShowLoading] = React.useState(false);


    React.useEffect(() => {
        
        const fetchData = async () => {
            let result = undefined;
            if(toggle){
                result = await axios(`https://63087357722029d9ddcf33e6.mockapi.io/transactions_v1`);
                setToggle(false);
            }
            else{
                result = await axios(`https://63087357722029d9ddcf33e6.mockapi.io/transactions_v2`);
                setToggle(true);
                
            }
            setData(result.data);
        }

        console.log("in effect hook")
        fetchData();        
        
    }, [count]);

    function Increment(){
        setCount(count+1);
    }

    return (
    <PageContent>
        <Main pad="large">
            <Suspense fallback={<Box align="center" justify="center"><Text>Loading...</Text></Box>}>
            {    (toggle)
                    ?(
                        <Text>
                            {console.log("print only id")}
                            {data.map(item => (
                                <Box key={item.id}>
                                    <Text>{item.id}</Text>
                                </Box>
                            ))}
                        </Text>
                    )
                    :(
                        <Text>
                            {console.log("print id and name")}
                            {data.map(item => (
                                <Box key={item.id}>
                                    <Text>{item.id} . {item.name}</Text>
                                </Box>
                            ))}
                        
                        </Text>
                    )
                
            }
            </Suspense>
            <Box pad="large" background="light-2">
                <Button label="Click me" onClick={Increment}/>
            </Box>
        </Main>
    </PageContent>
    );
};
