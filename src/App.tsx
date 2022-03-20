import { useContext } from 'react';
import { Route, Routes } from 'react-router';
import { Post } from './components/post/Post';
import { AuthContext, AuthContextProvider } from './_contexts/AuthContext';
import { HeaderContextProvider } from './_contexts/HeaderContext';
import { RequireAuth } from './hocs/RequireAuth';
import { Layout } from './layout/withLayout';
import { Actions } from './pages/actions/Actions';
import { Comments } from './pages/comments/Comments';
import { CreatePost } from './pages/create-post/CreatePost';
import { EditProfile } from './pages/edit-profile/EditProfile';
import { Login } from './pages/login/Login';
import { Main } from './pages/main/Main';
import { PostPage } from './pages/post/Post';
import { Profile } from './pages/profile/Profile';
import { Search } from './pages/search/Search';

function App() {
    const { isAuthReady } = useContext(AuthContext);
    return (
        <>
            {isAuthReady && (
                <HeaderContextProvider>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <RequireAuth>
                                    <Layout />
                                </RequireAuth>
                            }
                        >
                            <Route index element={<Main />} />
                            <Route path="search" element={<Search />} />
                            <Route path="actions" element={<Actions />} />
                            <Route path="profile/:login" element={<Profile />} />
                            <Route path="profile" element={<Profile />} />
                            <Route path="profile/:login/edit" element={<EditProfile />} />
                            <Route path="post/:id/comments" element={<Comments />} />
                            <Route path="post/:id" element={<PostPage />} />
                        </Route>
                        <Route path="login" element={<Login />} />
                    </Routes>
                </HeaderContextProvider>
            )}
        </>
    );
}

export default App;
