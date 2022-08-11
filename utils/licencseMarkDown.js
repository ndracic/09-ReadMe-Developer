//renders the license badge underneath the the generated readme Title
function renderBadge(license) {
    if (license === "None") {
        return ""
    }
}

const lice = license
const modifiedLicense = lice.split(' ').join('_')
return `![license](https://img.shields.io/badge/license-${modifiedLicense}-GREEN)`