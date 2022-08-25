import React from "react";
import { Button,Box,Text,
    PageContent,Main } from "grommet";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'



export default function Content(){

    const [count,setCount] = React.useState(0);
    const [showConfetti,setShowConfetti] = React.useState(false);

    React.useEffect(() => {
        if (count%3===0) {
            // show confetti
            setShowConfetti(true);
            setTimeout(() => {
                setShowConfetti(false);
            }
            ,5000);

        }
    }, [count]);

    const { width, height } = useWindowSize()

    function Increment(){
        setCount(count+1);
    }
    return (
    <PageContent>
        <Main pad="large">
            <Text size="large">{count}</Text>
            <Box pad="large" background="light-2">
                <Button label="Click me" onClick={Increment}/>
            </Box>
        </Main>
        {showConfetti && <Confetti width={width} height={height}/>}
    </PageContent>
    );
};
