import React from 'react'
import DraggableColorBox from "./DraggableColorBox";
import { SortableContainer } from "react-sortable-hoc";
const DraggableColorList=SortableContainer(({colors,removeColor}) =>{
	return (
		<div style={{height:"100%"}}>
			{colors.map((d,i)=>(
            <DraggableColorBox handleClick={()=>removeColor(d.name)} index={i} key={d.name} color={d.color} name={d.name}/>
          ))}
		</div>
	)
}
);
export default DraggableColorList;
