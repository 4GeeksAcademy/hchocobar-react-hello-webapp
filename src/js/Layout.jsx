import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
// Setting Context
import injectContext from "./store/appContext.js";
// Importamos componentes
import { Navbar } from "./component/Navbar.jsx";
import { Footer } from "./component/Footer.jsx";
// Importar Vistas
import { Home } from "./views/Home.jsx";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Contacts } from "./views/Contacts.jsx";
import { Login } from "./views/Login.jsx";
import { ContactDatails } from './views/ContactDatails.jsx';
import { ContactEdit } from "./views/ContactEdit.jsx";

// Create your first component
const Layout = () => {
	// The basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	
	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path='/contacts' element={<Contacts/>}/>
						<Route path='/contacts/:idContact' element={<ContactDatails/>}/>
						<Route path='/contacts-edit' element={<ContactEdit/>}/>
						<Route path="/login" element={<Login/>}/>
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>404 - Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
