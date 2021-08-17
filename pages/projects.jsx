import { useState } from 'react';
import ProjectControls from '../components/projects/ProjectControls.jsx';
import ProjectList from '../components/projects/ProjectList.jsx';
import ProjectGallery from '../components/projects/ProjectGallery.jsx';

export default function Projects() {
    const [ view, setView ] = useState(true)

    const handleView = () => {
        view ? setView(false)
        : setView(true);
    }

    return (
        <main className="page">
            <ProjectControls updateView={handleView} view={view}/>
            {
                view ? <ProjectGallery />
                : <ProjectList />
            }
        </main>
    )
}
