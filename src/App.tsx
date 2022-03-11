import { Route, Routes } from 'react-router';
import { Post } from './components/post/Post';
import { Layout } from './layout/withLayout';
import { Actions } from './pages/actions/Actions';
import { Comments } from './pages/comments/Comments';
import { Main } from './pages/main/Main';
import { PostPage } from './pages/post/Post';
import { Profile } from './pages/profile/Profile';
import { Search } from './pages/search/Search';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Main />} />
                <Route path="search" element={<Search />} />
                <Route path="actions" element={<Actions />} />
                <Route path="profile" element={<Profile />} />
                <Route path="comments" element={<Comments />} />
                <Route path="post/:id" element={<PostPage />} />
            </Route>
        </Routes>
    );
}

export default App;
