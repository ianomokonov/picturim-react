import { Route, Routes } from 'react-router';
import { Layout } from './layout/withLayout';
import { Actions } from './pages/actions/Actions';
import { Main } from './pages/main/Main';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Main />} />
                <Route path="search" element={<p>Search</p>} />
                <Route path="actions" element={<Actions />} />
                <Route path="profile" element={<p>Profile</p>} />
                <Route path="post/:id" element={<p>Post</p>} />
            </Route>
        </Routes>
    );
}

export default App;
