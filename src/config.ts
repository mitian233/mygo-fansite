import { ref } from "vue";

type linkListType = { name: string, icon: string, link: string; };
const linkList = ref<Array<linkListType>>([
    {
        name: '官方 Twitter/X',
        icon: 'fa6-brands:square-x-twitter',
        link: 'https://twitter.com/bang_dream_mygo'
    },
    {
        name: '官方 Bilibili',
        icon: 'fa6-brands:bilibili',
        link: 'https://space.bilibili.com/1459104794'
    },
    {
        name: '官方 YouTube',
        icon: 'fa6-brands:square-youtube',
        link: 'https://www.youtube.com/channel/UC80p_16pSSHA8YmtCVdX51w?sub_confirmation=1'
    }
]);

import bdlogo from './assets/img/sponsors/img_logo_bang-dream.png';
import bushilogo from './assets/img/sponsors/img_logo_bushi.png';
import gsclogo from './assets/img/sponsors/img_logo_gsc.png';
import horiprologo from './assets/img/sponsors/img_logo_horipro.png';
import mxlogo from './assets/img/sponsors/img_logo_tokyomx.png';
import uspilogo from './assets/img/sponsors/img_logo_usp.png';
type sponsorListType = { name: string, logo: string, link: string; };
const sponsorList = ref<Array<sponsorListType>>([
    {
        name: 'BanG Dream! Project',
        logo: bdlogo,
        link: 'https://bang-dream.com/'
    },
    {
        name: 'Bushiroad',
        logo: bushilogo,
        link: 'https://bushiroad.com/'
    },
    {
        name: 'MX电视台',
        logo: mxlogo,
        link: 'https://s.mxtv.jp/index.html'
    },
    {
        name: 'GSC',
        logo: gsclogo,
        link: 'https://www.goodsmile.info/ja'
    },
    {
        name: 'HoriPro',
        logo: horiprologo,
        link: 'https://www.horipro.co.jp/'
    },
    {
        name: 'USPI',
        logo: uspilogo,
        link: 'https://www.uspi.jp/'
    }
]);

export { linkList, sponsorList };