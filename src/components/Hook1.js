import React, { useState } from 'react';
import './hook1.css'

const Hook1 = () => {
    const [kq,setKq]=useState('')

    const Cal=()=>{
        setKq(eval(kq))
    }
    const removeALL=()=>{
        setKq('')
    }
    const del=()=>
    setKq(kq.slice(0,-1))
    return (
        <div className='backgroud'>
            <div className='cal'>
                <p>ELECTRONIC CALCULATOR</p>
                <div className='monitor'>
                    <h4>{kq}</h4>
                </div>
                <table class="number">
                    <tr>
                     <td><button id='xoa'onClick={removeALL}>C</button></td>
                     <td><button id='xoa1'onClick={del}>~</button></td>
                     <td><button value={"/"} onClick={()=>setKq(kq+"/")}>/</button></td>
                     <td><button value={"*"} onClick={()=>setKq(kq+"*")}>X</button></td>
                    </tr>
                    <tr>
                    <td><button value={7} onClick={()=>setKq(kq+7)}>7</button></td>
                     <td><button value={8} onClick={()=>setKq(kq+8)}>8</button></td>
                     <td><button value={9} onClick={()=>setKq(kq+9)}>9</button></td>
                     <td><button value={"-"} onClick={()=>setKq(kq+"-")}>-</button></td>
                    </tr>
                    <tr>
                    <td><button value={4} onClick={()=>setKq(kq+4)}>4</button></td>
                     <td><button value={5} onClick={()=>setKq(kq+5)}>5</button></td>
                     <td><button value={6} onClick={()=>setKq(kq+6)}>6</button></td>
                     <td><button value={"+"} onClick={()=>setKq(kq+"+")}>+</button></td>
                    </tr>
                    <tr>
                    <td><button value={1} onClick={()=>setKq(kq+1)}>1</button></td>
                     <td><button value={2} onClick={()=>setKq(kq+2)}>2</button></td>
                     <td><button value={3} onClick={()=>setKq(kq+3)}>3</button></td>
                     <td rowspan="2" ><button id='bang' value={"="} onClick={Cal}>=</button></td>
                    </tr>
                    <tr>
                    <td colspan="2" ><button id='khong' value={0} onClick={()=>setKq(kq+0)}>0</button></td>
                     <td><button value={"."} onClick={()=>setKq(kq+".")}>.</button></td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Hook1;
