import './styles.css'
import { BOOKMARKS_SVG, EXPLORE_SVG, HOME_SVG, MESSAGES_SVG, NOTIFICATIONS_SVG } from '../svgs'
import MenuItem from './MenuItem'

export default function SideMenu() {
    const menu = [
        {
            icon: HOME_SVG,
            name: 'Home'
        },
        {
            icon: EXPLORE_SVG,
            name: 'Explore'
        },
        {
            icon: NOTIFICATIONS_SVG,
            name: 'Notifications'
        },
        {
            icon: MESSAGES_SVG,
            name: 'Messages'
        },
        {
            icon: BOOKMARKS_SVG,
            name: 'Bookmarks'
        }
    ]

    return (
        <div className="mt-3 mx-5 side-menu">
            <img src={require('./images/Twitter-logo-png.png')} className="logo-icon mb-2" alt="img"/>

            {menu.map((item, index)=> <MenuItem item={item} key={index}/>)}

        </div>
    )
}
