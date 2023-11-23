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
                id: 4,
                title: "Đơn vị sử dụng"
            }
        ]
    },
    {
        iconName: "./images/group_icon.png",
        title: "Doanh thu",
        children: [
            {
                id: 1,
                title: "Báo cáo doanh thu"
            },
            {
                id: 2,
                title: "Lịch sử đối soát"
            },
            {
                id: 3,
                title: "Phân phối doanh thu"
            }
        ]
    },
    {
        iconName: "./images/setting_icon.png",
        title: "Cài đặt",
        children: [
            {
                id: 1,
                title: "Phân quyền người dùng"
            },
            {
                id: 2,
                title: "Cấu hình"
            },
            {
                id: 3,
                title: "Quản lý hợp đồng"
            },
            {
                id: 4,
                title: "Thông tin tác phẩm"
            },
            {
                id: 5,
                title: "Chu kỳ đối soát"
            }
        ]
    },
    {
        iconName: "./images/support_icon.png",
        title: "Hỗ trợ",
        children: [
            {
                id: 1,
                title: "Hướng dẫn sử dụng"
            },
            {
                id: 2,
                title: "Tải app"
            },
            {
                id: 3,
                title: "Feedback"
            }
        ]
    },
];

const ACTION_INFO_USER = [
    {
        id: 1,
        icon: "./images/fi_edit.png",
        title: "Sửa thông tin",
    },
    {
        id: 2,
        icon: "./images/fi_lock.png",
        title: "Đổi mật khẩu",
    },
    {
        id: 3,
        icon: "./images/fi_log-out.png",
        title: "Đăng xuất",
    }
];

export { LANGUAGE_ITEMS, SIDEBAR_ITEMS, ACTION_INFO_USER };