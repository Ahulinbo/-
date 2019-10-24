import Vue from 'vue'
import Router from 'vue-router'
import shouye from '../views/First'
import Fenlei from '../views/Second'
import Gwcar from '../views/third'
import Geren from '../views/Fourth'
import Qdao from '../components/Qdao'
import Ljuan from '../components/Ljuan'
import Kjia from '../components/Kjia'
import Zlan from '../components/Zlan'
import Qmkj from '../components/Qmkj'
import Jxzt from '../components/Jxzt'
import a from '../components/a'
import b from '../components/b'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'First',
            component: shouye
        },
        {
            path: "/Fenlei",
            name: "Second",
            component: Fenlei
        }, {
            path: "/Gwcar",
            name: "third",
            component: Gwcar
        }, {
            path: "/Geren",
            name: "Fourth",
            component: Geren
        }, {
            path: "/Qdao",
            name: "Qdao",
            component: Qdao
        }, {
            path: '/Ljuan',
            name: "Ljuan",
            component: Ljuan
        }, {
            path: "/Kjia",
            name: "Kjia",
            component: Kjia
        }, {
            path: "/Zlan",
            name: "Zlan",
            component: Zlan
        }, {
            path: "/Qmkj",
            name: "Qmkj",
            component: Qmkj
        }, {
            path: "/Jxzt",
            name: "Jxzt",
            component: Jxzt
        }, {
            path: "/a/:id?",
            name: "a",
            component: a
        }, {
            path: '/b/:id?',
            name: 'b',
            component: b
        }
    ]
})
