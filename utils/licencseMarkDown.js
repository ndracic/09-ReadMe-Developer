//renders the license badge underneath the the generated readme Title
function renderBadge(answers) {
    if (answers === "None") {
        return ""
    } else if (answers === "MIT") {
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (answers === "Apache") {
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (answers === "Mozilla")
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
}

module.exports = {
    renderBadge: renderBadge,
}
// ""Academic", 'BSD 3', "ISC", "Open"