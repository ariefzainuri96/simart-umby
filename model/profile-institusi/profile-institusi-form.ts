export type ProfileInstitusiForm = {
    mailHost?: string;
    username?: string;
    password?: string;
    from?: string;
    address?: string;
    port?: string;
    driver?: string;
    encryption?: string;
    limitasiBatasRevisi?: number;
    siteConfiguration?: SiteConfiguration;
};

type SiteConfiguration = {
    name?: string;
    email?: string;
    phone?: string;
    address?: string;
    imgLogo?: string;
    imgHalamanMultirole?: string;
    imgCapDokumen?: string;
};
