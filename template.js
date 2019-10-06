const { map, head, tail } = require('fxjs');

// add social icons
const createSocialIcon = (icon) => `
    <a target="_blank" href="${icon.link}">
        <div class="social-media-icon ${icon.name}-icon"></div>
    </a>
`

const createImgContent = src => `<img class="img-content" src="resource/${src}" alt="">`

const cretateListTab = (list) => `
    <div class="row">
        <div class="col-4">
            <div class="list-group" id="list-tab" role="tablist">
                ${
                    (info = head(list),
                    `<a class="list-group-item list-group-item-action active" id="list-${info.name}-list"
                    data-toggle="list" href="#list-${info.name}" role="tab" aria-controls="${info.name}">${info.title}</a>`)
                }
                ${
                    tail(list).map(info => 
                        `<a class="list-group-item list-group-item-action" id="list-${info.name}-list"
                        data-toggle="list" href="#list-${info.name}" role="tab" aria-controls="${info.name}">${info.title}</a>`
                    ).join('')
                }
            </div>
        </div>
        <div class="col-8">
            <div class="tab-content" id="nav-tabContent">
                ${
                    (info = head(list),
                    `<div class="tab-pane fade show active" id="list-${info.name}" role="tabpanel"
                        aria-labelledby="list-${info.name}-list">
                        ${info.content}
                    </div>`)
                }
                ${
                    tail(list).map(info =>
                        `<div class="tab-pane fade" id="list-${info.name}" role="tabpanel"
                            aria-labelledby="list-${info.name}-list">
                            ${info.content}
                        </div>`
                    ).join('')
                }
            </div>
        </div>
    </div>
`


module.exports = {
    createImgContent,
    createSocialIcon,
    cretateListTab,
}