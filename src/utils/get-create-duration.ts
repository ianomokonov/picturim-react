export const getCreateDuration = (inputDate: Date): string => {
    const date = inputDate instanceof Date ? inputDate : new Date(inputDate);
    const now = new Date().getTime();
    const lag = now - date.getTime();
    const hourLag = 1000 * 3600;
    const minuteLag = 1000 * 60;
    const dayLag = hourLag * 24;
    if (lag < hourLag) {
        return `${Math.ceil(lag / minuteLag)} мин. назад`;
    }

    if (lag < dayLag) {
        return `${Math.ceil(lag / hourLag)} ч. назад`;
    }

    return `${Math.ceil(lag / dayLag)} д. назад`;
};
