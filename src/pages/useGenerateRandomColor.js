import {useState} from 'react';

const useGenerateRandomColor = () => {
	const [color,setColor] = useState("")
	const generateColor = () =>{
		
		setColor(Math.floor(Math.random()* 0xFFFFFF).toString(16))
	};
	return {color,generateColor};
	
};
export default useGenerateRandomColor;
