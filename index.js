const { curry, hi, map, L, go } = require('fxjs');
const { createImgContent, createSocialIcon, cretateListTab } = require('./template');

const $ = (sel, parent = document) => parent.querySelector(sel);
const append = curry((parent, child) => parent.appendChild(child));
const el = html => {
    const a = document.createElement('div');
    a.innerHTML = html;
    return a.children[0];
}

// contants
const socials = [
    { name: 'github', link: 'https://github.com/ne2030' },
    { name: 'insta', link: 'https://www.instagram.com/gh_ryan_' },
    { name: 'facebook', link: 'https://www.facebook.com/gyeonghun.bae.5' },
    { name: 'medium', link: 'https://medium.com/@gyeonghunbae' },
    { name: 'rocket', link: 'https://www.rocketpunch.com/@GyeongHunBae' },
];

const techs = [
    { name: 'js', title: 'Javascript', 
        content: `가장 많이 쓰고, 오래쓰고 좋아하는 주력 언어입니다. node.js 를 하면서 서버도 작업을 하게 되었고 es6, 클로져, 비동기, 이벤트루프 등의 개념들을
            공부했습니다. 현재는 iterator 기반의 다형적인 프로그래밍에 관심이 많습니다.`},
    { name: 'react', title: 'React.js',
        content: `처음 웹을 시작했을때, 프로그래밍 구조를 보고 싶어서 배우게 되었습니다. React 를 배우면서 redux, thunk, saga 등 다양한 개념과
            그것이 해결하고자 하는 것들을 볼 수 있었습니다. React 로는 관리자 페이지, 채팅 서비스, 기부 플랫폼 웹 등을 만들었습니다.`},
    { name: 'fp', title: 'FP',
        content: `Functional Programming 의 약자로, 최근의 가장 주요한 관심사입니다. 함수형은 주로 객체지향과 대비되는 것으로 표현되는데, 상태를
            최대한 두지 않고, 부수효과를 일으키지 않으며, 참조 투명한 순수함수를 만드는 것이 목적입니다. 이를 활용하여 좀 더 가독성 좋고 
            생산성 높은 프로그래밍을 하고 싶고, 나아가서 실질적으로 서비스, 사용자에 나은 경험을 제공할 수 있는 프로그래밍까지 관심이 있습니다.`},
    { name: 'aws', title: 'AWS',
        content: `AWS 에 굉장히 다양한 서비스들이 존재하는데, 이를 활용하여 서비스 구축을 더욱 효과적이고 효율적으로 할 수 있다고 생각합니다. 단순히
        툴일 뿐이지만, 해당 툴로부터 해결하고자하는 문제 혹은 추구하면 좋은 이점들을 살펴볼 수 있어서 좋다고 생각합니다. 현재까지 AWS 의 cloudfront,
        s3, lambda, elastic beanstalk, api gateway, ec2 등의 서비스를 사용해본 경험이 있습니다.`},
]

const sectionInfos = [
    {
        content: () => createImgContent('giveu.png'),
        footer: ['Giveu - Web', '기뷰 서비스 웹, 서버 구현'],
    },
    {
        content: () => createImgContent('map.png'),
        footer: ['Moducompany - Web', '주차장 데이터와 지도 연동'],
    },
    {
        content: () => createImgContent('modu-delivery.png'),
        footer: ['GongIk - PWA', '문서 수발시 메모 및 푸시알람'],
    },
    {
        content: () => cretateListTab(techs),
        footer: ['Tech Stack &amp Interests', '요즘 관심사'],
        name: 'tech'
    },
]

const createSection = ([idx, sectionInfo]) =>
    `<div class="section section${idx % 4} ${sectionInfo.name || ''}">
        <p> .00${idx} </p>
        <div class="content">
            ${sectionInfo.content()}
            
        </div>
        <p class="footer">
            ${sectionInfo.footer.join('<br/>')}
        </p>
    </div>`

console.log(11);
// init
(function() {
    const iconContainer = $('.social-media-icons');
    map(social => append(iconContainer, el(createSocialIcon(social)))
        ,socials)

    const rightContainer = $('.right-container');
    console.log(rightContainer);
    go(
        sectionInfos,
        L.indexValues,
        map(createSection),
        map(el),
        map(append(rightContainer))
    )
})()