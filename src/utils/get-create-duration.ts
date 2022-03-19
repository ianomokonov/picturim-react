export const getCreateDuration = (date: Date): string => {
    const now = new Date().getTime();
    const lag = now - date.getTime();
    const hourLag = 1000 * 3600;
    const dayLag = hourLag * 24;
    if (lag < dayLag) {
        return `${Math.ceil(lag / hourLag)}ч. назад`;
    }

    return `${Math.ceil(lag / dayLag)}д. назад`;
};
