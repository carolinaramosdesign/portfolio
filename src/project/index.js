import projectConfig from 'project/config.json';

export function getProjects() {
    return Object.keys(projectConfig);
}

export function isProject(project) {
    return getProjects().includes(project);
}

export function getConfig(project) {
    return projectConfig[project];
}

export function getImages(project) {
    if (!isProject(project)) {
        throw Error(`Unknown project ${project}`);
    }

    const context = require.context('.', true, /\.(jpg)$/);

    return context
        .keys()
        .filter(path => new RegExp(project).test(path))
        .map(path => context(path).default);
}
