export type MenuModel = {
    title: string;
    icon: string;
    selected: boolean;
    child?: MenuChildModel[];
};

export type MenuChildModel = {
    title: string;
    selected?: boolean;
    child?: MenuChildModel[];
};

export const menuList: MenuModel[] = [
    {
        title: "Dashboard",
        icon: "dashboard",
        selected: true,
    },
    {
        title: "Konfigurasi Umum",
        icon: "konfigurasi-umum",
        selected: true,
        child: [
            {
                title: "Pengaturan Umum",
                selected: true,
            },
            {
                title: "Profil Institusi",
            },
            {
                title: "Sistem Setting",
                child: [
                    {
                        title: "Format Penomoran",
                    },
                    {
                        title: "Signature",
                    },
                ],
            },
        ],
    },
];
