export function makeProjectsListMarkup(projects, pageLang) {
  return projects.list
    .map((project) => {
      return `
            <li class="projects__item project">
                <h4 class="project__title">${project.title}</h4>
                <div class="project__wrapper">
                    <div class="project__info">
                        <p class="project__description">${
                          project.description[pageLang]
                        }</p>
                        <div class="project__technology"> 
                            <span class="project__tech">Stack:</span>
                            ${getProjectStackList(project)}
                        </div>

                    </div>
                    <div class="project__subinfo">
                    <div class="project__screenshot">
                        <img 
                            src="${
                              "./imgs/" +
                              project.title.toLocaleLowerCase() +
                              ".jpg"
                            }" 
                            alt="Page ${project.title} screenshot" />
                    </div>
                        <div class="project__buttons">
                          <a class="project__link btn" href="${
                            project.link
                          }">site</a>
                          <a class="project__link btn" href="${
                            project.urlGit
                          }">code</a>
                        </div>
                    </div>
                </div>
            </li>
        `;
    })
    .join("");
}

// function getProjectTasksList(project, pageLang) {
//   return `<ul class="project__tasks">${getProjectTasksItems(
//     project,
//     pageLang
//   )}</ul>`;
// }

// function getProjectTasksItems(project, pageLang) {
//   return project.generalTasks[pageLang]
//     .map((task) => `<li>${task}</li>`)
//     .join("");
// }

function getProjectStackList(project, pageLang) {
  return `<ul class="project__stack">${getProjectStackItems(
    project,
    pageLang
  )}</ul>`;
}

function getProjectStackItems(project) {
  return project.stack.map((technology) => `<li>${technology}</li>`).join("");
}
