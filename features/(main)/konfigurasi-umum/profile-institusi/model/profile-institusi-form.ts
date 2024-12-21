export type ProfileInstitusiForm = {
    mailHost?: string;
    username?: string;
    password?: string;
    from?: string;
    address?: string;
    port?: string;
    driver?: string;
    encryption?: string;
    limitasiBatasRevisi: string;
    siteConfiguration?: SiteConfiguration;
};

export type SiteConfiguration = {
    name?: string;
    email?: string;
    phone?: string;
    address?: string;
    imgLogo?: string;
    imgMultirole?: string;
    imgDokumen?: string;
};
