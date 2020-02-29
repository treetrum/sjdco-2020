export default async function takeAtLeast(prom: Promise<any>, time: number) {
    const delay = new Promise(resolve => {
        setTimeout(resolve, time);
    });
    const [result] = await Promise.all([prom, delay]);
    return result;
}
