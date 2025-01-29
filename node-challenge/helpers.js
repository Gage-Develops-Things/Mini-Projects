import fs from 'fs';

const formatFileName = (data) => {
    return `${data.userName}.html`
}
// write to file

// html string template literal

let htmlString = (data) => `<!DOCTYPE html>
<html lang="en">

<head>
<!-- TODO: add head content below -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Portfolio</title>
  <link rel="stylesheet" href="./assets/css/style.css"/>
</head>

<body>
<!-- TODO: add body content below -->
    <header>
        <h1>${data.userName}</h1>
    </header>

    <main>
        <section class="hero-banner">
            <div>
                <h2>My Professional Portfolio</h2>
            </div>
        </section>

    <section class="page-wrapper">

        <section class="page-section">
            <h2>About Me</h2>
            <div>
                <p id="bio">${data.bio}</p>
            </div>
        </section>
        <section class="page-section" class="contact">
            <h2>Contact</h2>
            <div>
                <address>
                    <a id="address">${data.address}</a>
                    <a id="linkedIn">${data.linkedInUrl}</a>
                    <a id="gitHub">${data.gitHubUrl}</a>
                </address>
            </div>
        </section>
    </section>
    </main>
</body>

</html>`;

export default (data) => {
    const fileName = formatFileName(data);
    const content = htmlString(data);

    fs.writeFile(fileName, content, (err) => {
        err ? console.error(err) : console.log("Written to file.")
    })
};