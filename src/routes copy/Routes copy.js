import {BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import AuthProvider from './AuthProvider';
import DashboardModule from '../modules/dashboard';
import DealerModule from '../modules/dealer';
import DealerDetails from '../modules/dealer/screens/details';
import Structure from '../structure/Structure';

const RouteApp = () => {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    {/* user role */}
                    <Route path="/" element={<ProtectedRoute ><Outlet /></ProtectedRoute>}>
                        <Route path="dashboard" element={<DashboardModule />} />
                        <Route path="dealers" element={<DealerModule />} />
                        <Route path="dealers/:id" element={<DealerDetails />} />
                        <Route path="categories" element={<div>categories</div>} />
                        <Route path="categories/:id" element={<div>specific categories</div>} />
                        <Route path="products" element={<div>products</div>} />
                        <Route path="products/:id" element={<div>specific products</div>} />
                        <Route path="report" element={<div>report</div>} />
                        <Route path="add-stock" element={<div>add stock</div>} />
                        <Route path="return-stock" element={<div>return stock</div>} />
                        <Route path="sell" element={<div>sell products</div>} />
                        <Route path="sr" element={<div>sr manage</div>} />
                    </Route>
                    <Route path="/login" element={<div>login module. check auth here and redirect to dashboard if user logged-in !</div>}/>

                    {/* TODO: admin role: need to add separate protectedroute component for admin */}
                    <Route path='/admin' element={<div>admin layout <Outlet /></div>}>
                        <Route path='dashboard' element={<div> admin dashboard</div>} />
                    </Route>
                    <Route path="/admin/login" element={<div>login</div>}/>

                    {/* public page */}
                    <Route path="/public-page" element={<div>this is public page</div>} />

                  <Route path="structure" element={<Structure />} />

                    <Route path="*" element={<div>no match route</div>} />
                </Routes>
            </AuthProvider>
        </Router>
    );
}
export default RouteApp;

/* 
Router
    Provider
        div : full body
            div : left side
            div : right side
                div : top header
                div: main container
                    Routes
                        Route
                        Route
*/