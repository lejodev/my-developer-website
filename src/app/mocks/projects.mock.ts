import { Project } from "../shared/interfaces/project.interface";

export const projects: Project[] = [
    {
        name: 'Ruta404 Adventures',
        description: 'A webpage for a motorcycling adventures youtube channel',
        isAlive: true,
        imageUrl: '/images/ruta404.png',
        githubUrl: 'https://github.com/lejodev/ruta-404',
        url: 'https://ruta404.com'
    },
    {
        name: 'NewLight',
        description: 'A commerce website for a lighting store',
        isAlive: true,
        imageUrl: '/images/newlight.png',
        githubUrl: 'https://github.com/lejodev/new-light-backend',
        url: 'https://newlight-store-frontend.vercel.app/'
    },
    {
        name: 'JournalIT',
        description: 'A Journaling website where each user can save theirn own notes, thinkings and more, is aimed to be a mobile app as well',
        isAlive: false,
        githubUrl: 'https://github.com/lejodev/journaling-frontend',
    }
]