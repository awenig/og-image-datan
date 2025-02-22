export type FileType = 'png' | 'jpeg';
export type Theme = 'light' | 'dark';

export interface ParsedRequest {
    fileType: FileType;
    text: string;
    theme: Theme;
    md: boolean;
    fontSize: string;
    images: string[];
    widths: string[];
    heights: string[];
    voteN: string[];
    legislature: string[];
    date: string[];
    pour: string[];
    abs: string[];
    contre: string[];
    sort: string[];
    template: string[];
    prenom: string[];
    nom: string[];
    group: string[];
    couleur: string[];
    id: string[];
    img: string[];
    abrev: string[];
}
