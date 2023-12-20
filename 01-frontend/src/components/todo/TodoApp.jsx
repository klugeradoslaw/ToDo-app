
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LogoutComponent from './LogoutComponent';
import HeaderComponent from './HeaderComponent';
import ListTodosComponent from "./ListTodosComponent";
import ErrorComponent from "./ErrorComponent";
import WelcomeComponent from "./WelcomeComponent";
import LoginComponent from "./LoginComponent";
import TodoComponent from "./TodoComponent";

import AuthProvider, { useAuth } from './security/AuthContext'

import './TodoApp.css';


function AutheticatedRoute({children}) {
    const authContext = useAuth()
    if(authContext.isAuthenticated)
        return children
    else
        return <Navigate to="/" />
    
}

export default function ToDoApp() {
    return (
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent />
                        <Routes>
                            <Route path="/" element={<LoginComponent />} />
                            <Route path="/login" element={<LoginComponent />} />
                            
                            <Route path="/welcome/:username" element={
                                <AutheticatedRoute>
                                    <WelcomeComponent />
                                </AutheticatedRoute>} />

                            <Route path="/todos" element={
                                <AutheticatedRoute>
                                   <ListTodosComponent />
                               </AutheticatedRoute>
                           } />
                       <Route path="/todo/:id" element={
                               <AutheticatedRoute>
                                   <TodoComponent />
                               </AutheticatedRoute>
                           } />
                                
                            <Route path="/logout" element={
                                <AutheticatedRoute>
                                    <LogoutComponent />
                                </AutheticatedRoute>
                            } />
                
                            <Route path="*" element={<ErrorComponent />} />
                        </Routes>
                </BrowserRouter>   
            </AuthProvider>
        </div> 
    )
 }










  