export interface Exercise {
    uuid: string
    equipment: { id: number; name: string }[]
    translations: { name: string, language: string }[]
    category: { id: number; name: string }[]
    muscles: { id: number; name_en: string }[]
    muscles_secondary: { id: number; name_en: string }[]
    images: { id: number; image: string }[]
}
