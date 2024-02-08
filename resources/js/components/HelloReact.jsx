import React from 'react';
import ReactDOM from 'react-dom/client';   /// react-dom/client r react-dom lekha ak eee kotha kintu amader React ar new virsion oonujayi amader react-dom/client aivabe likhte hobe ta chara react-dom likhle ooo kaj korte pare...
 
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import FormBuilder from './Formbuilder';

function MyApp(){
	return (
		<BrowserRouter basename='/reactjs/reactjs/'>
				<h1>Form Inputs</h1>				 
				<Routes>
					<Route path="/" element={<FormBuilder />}></Route>					
				</Routes>
		</BrowserRouter>
	
		);
}



ReactDOM.createRoot(document.getElementById('app')).render(   <MyApp />  );
