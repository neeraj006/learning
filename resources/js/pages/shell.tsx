import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import About from '@/views/about';
import NotFound from '@/views/not-found';
import Welcome from '@/views/welcome';

/**
 * The only Inertia page in this app.
 *
 * Laravel serves this same component for every URL (see routes/web.php), so
 * React Router — not Laravel — decides what renders. Adding a screen means
 * adding a <Route> below; the backend never needs to know about it.
 */
export default function Shell() {
    return (
        <BrowserRouter>
            <nav>
                {/* Use React Router's <Link>, never <a href> or Inertia's
                    <Link> — both would trigger a full page load. */}
                <Link to="/">Home</Link> <Link to="/about">About</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
