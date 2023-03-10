import React from 'react';
import { Simulate } from 'react-dom/test-utils';
import SlotM from './SlotMatch';


const Comp = () => {
    return(
        <>
            <h1 className='heading_style'>
                Welcome to{" "}
                <span style={{ fontWeight: "bold", color: "Blue" }}> Slot Machine Game </span>
            </h1>
            <SlotM x= 'đŠī¸' y= 'đ' z= 'đ'/>
            <SlotM x= 'đŠī¸' y= 'đŠī¸' z= 'đŠī¸'/>
            <SlotM x= 'đ' y= 'đ' z= 'đ¸'/>
            <SlotM x= 'đ¯' y= 'đ¯' z= 'đ¯'/>
        </>
    )
}

export default Comp;