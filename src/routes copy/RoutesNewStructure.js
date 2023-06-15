import {BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import AuthProvider from './AuthProvider';
import DashboardModule from '../modules/dashboard';

const RouteNewStructureApp = () => {
    return (
        <Router>
            <AuthProvider>
                <div className='full_body'>
                    <div className='left_side'></div>
                    <div className='right-side'>
                        <div className='top_bar'></div>
                        <div className='main_container'>
                        <Routes>
                            {/* user role */}
                            <Route path="/" element={<ProtectedRoute ><DashboardModule /></ProtectedRoute>}>
                                <Route path="/dashboard" element={<ProtectedRoute ><DashboardModule /></ProtectedRoute>} />
                            </Route>
                            <Route path="/login" element={<div>login</div>}/>

                            {/* admin role */}
                            <Route path='/admin' element={<div>admin layout <Outlet /></div>}>
                                <Route path='dashboard' element={<div> admin dashboard</div>} />
                            </Route>
                            <Route path="/admin/login" element={<div>login</div>}/>

                            {/* public page */}
                            <Route path="/public-page" element={<div>this is public page</div>} />
                            <Route path="*" element={<div>no match route</div>} />
                        </Routes>
                        </div>
                    </div>
                </div>
            </AuthProvider>
        </Router>
    );
}
export default RouteNewStructureApp;