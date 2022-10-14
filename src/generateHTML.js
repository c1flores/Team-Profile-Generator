
//export function to generate HTML page

module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />

        <title>Team Profile Generator</title>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,700;1,300&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="style.css" />
    
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron text-white mb-3">
                    <h1 class="text-center">Software Engineering Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="main-section col-12 d-flex justify-content-center">
                    ${createTeam(team)}
                </div>
            </div>
        </div>
    </body>
</html>`;
};

// function for creating the team profile

const createTeam = team => {

    // function for creating manager profile
    const createManager = manager => {
        return `
        <div class="card employee-card manager-card">
            <div class="card-header text-center">
                <h2 class="card-title">${manager.getName()}</h2>
                <h4 class="card-title">Title: ${manager.getRole()}</h4>
            </div>
            <div class="card-body bg-light">
              <ul class="list-group text-dark">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto: ${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office Number: <a href="tel:${manager.getOfficeNumber()}">${manager.getOfficeNumber()}</a></li>
              </ul>
            </div>
        </div>
        `;
    };


    // function for creating engineer profile
    const createEngineer = engineer => {
        return `
        <div class="card employee-card engineer-card">
            <div class="card-header text-center">
                <h2 class="card-title">${engineer.getName()}</h2>
                <h4 class="card-title">Title: ${engineer.getRole()}</h4>
            </div>
            <div class="card-body bg-light">
              <ul class="list-group text-dark">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGitHub()}">${engineer.getGitHub()}</a></li>
              </ul>
            </div>
        </div>
        `;
    };

    // function for creating intern profile
    const createIntern = intern => {
        return `
        <div class="card employee-card intern-card">
            <div class="card-header text-center">
                <h2 class="card-title">${intern.getName()}</h2>
                <h4 class="card-title">Title: ${intern.getRole()}</h4>
            </div>
            <div class="card-body bg-light">
              <ul class="list-group text-dark">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto: ${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
              </ul>
            </div>
        </div>
        `;
    };

    // creating an array that to use to create appropriate card on html
    const html = [];
    
    html.push(team.filter(employee => employee.getRole() === 'Manager').map(manager => createManager(manager)));
    

    html.push(team.filter(employee => employee.getRole() === 'Engineer').map(engineer => createEngineer(engineer)));
    

    html.push(team.filter(employee => employee.getRole() === 'Intern').map(intern => createIntern(intern)));
    
    return html.join("");
}



            
