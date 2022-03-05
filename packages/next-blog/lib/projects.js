import path from 'path'
const modulesDirectory = path.join(process.cwd(), 'modules')
const projects = [
  {
    id: 'fiPay',
    component: '../../modules/projects/fi-pay',
    title: 'Fi Pay',
  },
];

export function getAllProjectsIds() {
  return projects.map(project => {
    return {
      params: {
        id: project.id,
        title: project.title,
      },
    }
  })
}

export function getProjectData(id) {
  return {
    id,
    component: 'Empty',
    ...projects.find(project => project.id === id),
  }
}