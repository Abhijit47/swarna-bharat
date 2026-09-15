export type MenuThumb = {
    img: string;
    title: string;
    btnPath: string;
};

export type MenuSubItem = {
    label: string;
    path: string;
    submenu?: MenuSubItem[];
};

export type MenuItem = {
    label: string;
    path: string;
    hasDropdown?: boolean;
    thumbMenu?: MenuThumb[];
    submenu?: MenuSubItem[];
};
export const menuData: MenuItem[] = [
    {
        label: "Home",
        path: "/",
        hasDropdown: true,
        thumbMenu: [
            {
                img: "/img/header/home-1.jpg",
                title: "Home Page 01",
                btnPath: "/",
            },
            {
                img: "/img/header/home-2.jpg",
                title: "Home Page 02",
                btnPath: "/home-2",
            },
            {
                img: "/img/header/home-3.jpg",
                title: "Home Page 03",
                btnPath: "/home-3",
            },
        ],
        submenu: [
            {
                label: "Home 01",
                path: "/",
            },
            {
                label: "Home 02",
                path: "/home-2",
            },
            {
                label: "Home 03",
                path: "/home-3",
            },
        ],
    },
    {
        label: "About Us",
        path: "/about",
    },
    {
        label: "Pages",
        path: "/news-details",
        hasDropdown: true,
        submenu: [
            {
                label: "Cause",
                path: "/project-details",
                submenu: [
                    { label: "Our Cause", path: "/project" },
                    { label: "Cause Details", path: "/project-details" },
                ],
            },
            {
                label: "volounteer",
                path: "/volounteer-details",
                submenu: [
                    { label: "Become Volounteer", path: "/become-volounteer" },
                    { label: "Volounteer", path: "/volounteer" },
                    { label: "Volounteer Details", path: "/volounteer-details" },
                ],
            },
            {
                label: "Event",
                path: "/event-details",
                submenu: [
                    { label: "Our Event", path: "/event" },
                    { label: "Event List", path: "/event-list" },
                    { label: "Event Details", path: "/event-details" },
                ],
            },
            {
                label: "Donation",
                path: "/donation-details",
                submenu: [
                    { label: "Our Donation", path: "/donation" },
                    { label: "Donation Now", path: "/donation-now" },
                    { label: "Donation Details", path: "/donation-details" },
                ],
            },
            { label: "Our Pricing", path: "/pricing" },
            { label: "Our Faq", path: "/faq" },
            { label: "404 Page", path: "/404" },
        ],
    },
    {
        label: "Blog",
        path: "/news-details",
        hasDropdown: true,
        submenu: [
            { label: "Blog Grid", path: "/news-grid" },
            { label: "Blog Standard", path: "/news" },
            { label: "Blog Details", path: "/news-details" },
        ],
    },
    {
        label: "Contact Us",
        path: "/contact",
    },
];