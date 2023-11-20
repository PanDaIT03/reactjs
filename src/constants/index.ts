const LANGUAGE_ITEMS = [
    {
        id: 1,
        title: "English 1"
    },
    {
        id: 2,
        title: "English 2"
    }
];

const SIDEBAR_ITEMS = [
    {
        iconName: "./images/ban_ghi_icon.png",
        title: "Kho bản ghi"
    },
    {
        iconName: "./images/playlist_icon.png",
        title: "Playlist"
    },
    {
        iconName: "./images/u_calendar-alt.png",
        title: "Lập lịch phát"
    },
    {
        iconName: "./images/hop_dong_icon.png",
        title: "Quản lý",
        children: [
            {
                id: 1,
                title: "Quản lý hợp đồng"
            },
            {
                id: 2,
                title: "Quản lý thiết bị"
            },
            {
                id: 3,
                title: "Đơn vị uỷ quyền"
            },
            {
                id: 1,
                title: "Đơn vị sử dụng"
            }
        ]
    },
    {
        iconName: "./images/group_icon.png",
        title: "Doanh thu"
    },
    {
        iconName: "./images/setting_icon.png",
        title: "Cài đặt"
    },
    {
        iconName: "./images/support_icon.png",
        title: "Hỗ trợ"
    },
];

export { LANGUAGE_ITEMS, SIDEBAR_ITEMS };